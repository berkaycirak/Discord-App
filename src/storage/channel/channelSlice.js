import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const initialState = {
	channelId: null,
	channelName: null,
};

export const channelSlice = createSlice({
	name: 'channel',
	initialState,
	reducers: {
		setChannelInfo: (state, action) => {
			state.channelId = action.payload.channelId;
			state.channelName = action.payload.channelName;
		},
	},
});

export const { setChannelInfo } = channelSlice.actions;
export default channelSlice.reducer;

export const useChannelId = () =>
	useSelector((state) => state.channel.channelId);
export const useChannelName = () =>
	useSelector((state) => state.channel.channelName);
