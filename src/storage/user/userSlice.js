import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const initialState = {
	displayName: '',
	email: '',
	accessToken: '',
	photoURL: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.displayName = action.payload.displayName;
			state.email = action.payload.email;
			state.accessToken = action.payload.accessToken;
			state.photoURL = action.payload.photoURL;
		},
	},
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

export const useUserInfo = () => useSelector((state) => state.user);
