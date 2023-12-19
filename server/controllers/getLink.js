const ytdl = require("ytdl-core");

exports.getLink = async(req,res) => {
    const {link} = req.body;
    // console.log("left"+link+"right");
    const options = {
        quality : "highestaudio",
        filter : "audioonly"

    }
    try{
        let op = await ytdl.getInfo(link, options);
        // console.log(op.videoDetails.thumbnails)
        const links = []
        op.formats.map(el => {
            if (!el.hasVideo && el.hasAudio){
                links.push(el);
            }
        })
        // console.log(links);
        res.status(200).json({
            ok:true,
            success : true,
            link : links[links.length - 1].url,
            thumbnail : op.videoDetails.thumbnails[op.videoDetails.thumbnails.length - 1].url,
            title : op.videoDetails.title
        });
    } catch(err){
        res.status(500).json({
            success:false,
            message : "Some error in API occured!"
        })
    }
        
        
        
}