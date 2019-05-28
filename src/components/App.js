import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
	state = { videos: [], selectedVideo: null };

	onTermSubmit = async term => {
		const response = await youtube.get('/search', {
			params: {
				q: term
			}
		});

		this.setState({ videos: response.data.items });
	};

	onVideoSelect = async video => {
		this.setState({ selectedVideo: video });
	};

	render() {
		return (
			<div>
				<div className="container">
					<div className="row mt-3 justify-content-center">
						<div className="col-md-12">
							<h2 className="text-center text-danger">Youtube Video App</h2>
						</div>
					</div>
					<div className="row">
						<SearchBar onTermSubmit={this.onTermSubmit} />
					</div>
					<div className="row">
						<div className="col-md-8">
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className="col-md-4">
							<VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
						</div>
					</div>
				</div>
				<footer className="footer text-center">
					<div className="container">
						<span className="text-muted">
							<a href="https://github.com/miguemartelo" target="_blank" rel="noopener noreferrer">
								By: MigueMartelo
							</a>
						</span>
					</div>
				</footer>
			</div>
		);
	}
}

export default App;
