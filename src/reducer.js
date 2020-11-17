export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	// REMOVE after finished developing...
	token:
		'BQDuuKyT0fXeDGgJXPkwblvs73zNdw9BVHhV1CKGuO29qDBK7K3_TMlGxRgSx1LMlHmC6RjQ5fMkPa2eSnY7CfL1HLFj1aMgn1MtLroWQzEGXoUQpVKZ-R4nuayES3F3K3yT0o3MzZG2lCd7dM8y7HcZNlcgkhgJzVSVHRa88F3YYrWB',
};

const reducer = (state, action) => {
	console.log(action);

	// Action -> type, [payload]

	switch (action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			};
		case 'SET_TOKEN':
			return {
				...state,
				token: action.token,
			};
		case 'SET_PLAYLISTS':
			return {
				...state,
				playlists: action.playlists,
			};
		case 'SET_PLAYING':
			return {
				...state,
				playing: action.playing,
			};

		case 'SET_ITEM':
			return {
				...state,
				item: action.item,
			};
		case 'SET_DISCOVER_WEEKLY':
			return {
				...state,
				discover_weekly: action.discover_weekly,
			};

		default:
			return state;
	}
};

export default reducer;
