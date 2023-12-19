const ytdl = require("youtube-dl-exec");

exports.getLink = async(req,res) => {
    const {link} = req.body;
    // console.log("left"+link+"right");
    ytdl(link, {
    dumpSingleJson: true,
    noCheckCertificates: true,
    noWarnings: true,
    preferFreeFormats: true,
    addHeader: ['referer:youtube.com', 'user-agent:googlebot']
    })
    .then(output =>{ 
        console.log("enters");
        const check = output;
        let op = [];
        output = output.formats;
        Promise.all(
            output.map(el => {
                if (el.resolution === "audio only"){
                    op.push(el);
                }
            })
        )
        
        res.status(200).json({
            ok:true,
            success : true,
            link : op[op.length - 1].url,
            thumbnail : check.thumbnail,
            title : check.title
        });
        
    })
    .catch( err => {
        res.status(500).json(
            {
                ok:false,
                success:false,
                data : "Server error occured!",
                error : err 
            }
        )
    })
}