import React, { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
	const [{ user, token }, dispatch] = useDataLayerValue();

	// Run code base on a given condition
	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = '';
		const _token = hash.access_token; // not showing token on the url after hash#
		if (_token) {
			spotify.setAccessToken(_token);
			dispatch({
				type: 'SET_TOKEN',
				token: _token,
			});

			spotify.getMe().then((user) => {
				console.log(user);
				dispatch({
					type: 'SET_USER',
					user: user,
				});
			});
			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type: 'SET_PLAYLISTS',
					playlists: playlists,
				});
			});

			spotify.getPlaylist('3MGwsbJEL2tGuJly0Un1lq').then((response) => {
				console.log(response);
				dispatch({
					type: 'SET_DISCOVER_WEEKLY',
					discover_weekly: response,
				});
			});
		}
	}, [token, dispatch]);

	return (
		<div className='app'>
			{token ? <Player spotify={spotify} /> : <Login />}
		</div>
	);
}

export default App;
