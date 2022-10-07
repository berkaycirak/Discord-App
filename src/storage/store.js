import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import channelReducer from './channels/channelSlice';

// To persist in refreshing. Since refreshing causes data lost, we should store that data in localStorage.
function saveToLocalStorage(state) {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('persistentState', serializedState);
	} catch (error) {
		console.warn(error);
	}
}

// To read data from localStorage
function loadFromLocalStorage() {
	try {
		const serializedState = localStorage.getItem('persistentState');
		if (serializedState === null) return undefined;
		return JSON.parse(serializedState);
	} catch (error) {
		console.warn(error);
		return undefined;
	}
}

export const store = configureStore({
	reducer: {
		user: userReducer,
		channel: channelReducer,
	},
	preloadedState: loadFromLocalStorage(),
});

// store is mutable object. Therefore, that will change the value on the reference.
store.subscribe(() => saveToLocalStorage(store.getState()));
