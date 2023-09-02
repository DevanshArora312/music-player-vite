import { useState } from "react";

const useGetter = link => {
    const [source,setSource] = useState(null);
    const [title,setTitle] = useState(null);
    const [thum,setThum] = useState(null);
    const [err_msg,setErr_msg] = useState(null);
//     const youtubedl = require('youtube-dl-exec')
//     youtubedl('https://www.youtube.com/watch?v=6xKWiCMKKJg', {
//     dumpSingleJson: true,
//     noCheckCertificates: true,
//     noWarnings: true,
//     preferFreeFormats: true,
//     addHeader: [
//         'referer:youtube.com',
//         'user-agent:googlebot'
//     ]

// }).then(output => console.log(2,output))
    return {source,title,thum,err_msg};
}

export default useGetter;