import axios from 'axios';

const KEY = 'AIzaSyDnhmLwWHLC86jXhHA-7rtOgKoL89o8SqQ';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});
