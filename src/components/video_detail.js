import React from "react";

const VideoDetail = ({video}) => {
    if(!video){
        return <div>Loading...</div>
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    const d = new Date(video.snippet.publishedAt);
    const trueDate = d.toDateString();
    console.log(d.toDateString());
    

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={url} className="embed-responsive-item"></iframe>
            </div>
            <div className="details">
                <div><strong>{video.snippet.title}</strong></div>
                <small><strong>{video.snippet.channelTitle}</strong></small>
                
            </div>
            <div className="details">
                <small><strong>Published on {trueDate}</strong></small>
                <div><small>{video.snippet.description}</small></div>
            </div>
        </div>
    );
};

export default VideoDetail;