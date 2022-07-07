import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/getAuth";

const firebaseConfig = {
	apiKey: process.env.FIRE_BASE_SECRET_KEY_API,
	authDomain: "monkey-blogging-cc9e4.firebaseapp.com",
	projectId: "monkey-blogging-cc9e4",
	storageBucket: "monkey-blogging-cc9e4.appspot.com",
	messagingSenderId: "110535142787",
	appId: "1:110535142787:web:34acd0ca327ac5892b5ab6",
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const auth = getAuth(app);

export { database, auth };
