import React from 'react';

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Loading...</div>;
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div className="card text-white bg-secondary mb-3">
			<div className="card-header">
				<h3>{video.snippet.title}</h3>
			</div>
			<div className="card-body">
				<div className="embed-responsive embed-responsive-16by9">
					<iframe src={videoSrc} frameborder="0" title={video.snippet.title} className="embed-responsive-item" />
				</div>
				<p className="mt-1">{video.snippet.description}</p>
			</div>
		</div>
	);
};

export default VideoDetail;
