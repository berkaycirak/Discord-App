import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
} from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBgr0w9Mn2WrzvSw2IpxYVCCvgD1c6HZMM',
	authDomain: 'discord-clone-92568.firebaseapp.com',
	projectId: 'discord-clone-92568',
	storageBucket: 'discord-clone-92568.appspot.com',
	messagingSenderId: '349519218890',
	appId: '1:349519218890:web:4bdc3c54f3788980a00c33',
};

const app = initializeApp(firebaseConfig);

// Database of Firebase
export const db = getFirestore(app);

// Authentication in Firebase
export const auth = getAuth();

// Google Provider to login via Google-sign
export const provider = new GoogleAuthProvider();
