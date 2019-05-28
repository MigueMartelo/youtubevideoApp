import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };

	onInputChange = e => {
		this.setState({ term: e.target.value });
	};

	onFormSubmit = e => {
		e.preventDefault();

		this.props.onTermSubmit(this.state.term);
	};

	render() {
		return (
			<div className="col-md-12">
				<div className="card text-white bg-primary mb-3">
					<div className="card-header">Video Search</div>
					<div className="card-body">
						<form onSubmit={this.onFormSubmit}>
							<div className="form-group">
								<input
									type="text"
									value={this.state.term}
									onChange={this.onInputChange}
									className="form-control"
									placeholder="What do you want to see?"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default SearchBar;
