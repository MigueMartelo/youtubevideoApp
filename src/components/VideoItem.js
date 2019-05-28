import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
	return (
		<div className="video-item list-group-item flex-column mb-2" onClick={() => onVideoSelect(video)}>
			<div className="d-flex w-100 justify-content-between">
				<img
					className="img-fluid img-thumbnail rounded"
					src={video.snippet.thumbnails.medium.url}
					alt={video.snippet.title}
				/>
			</div>
			<p className="m-1">{video.snippet.title}</p>
		</div>
	);
};

export default VideoItem;
