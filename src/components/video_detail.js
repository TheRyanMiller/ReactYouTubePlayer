import React from 'react';

const VideoDetail = ({video}) => {
  if(!video){
    return <div>Loading...</div>;
  }
  console.log(video);
  const videoId = video.id.videoId;
  //const url = 'https://www.youtube.com/embed/'+videoId;
  const url = `https://www.youtube.com/embed/${videoId}`; //Doing the ES6 concat with backticks
  return(
    <div className="video-deatil col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
