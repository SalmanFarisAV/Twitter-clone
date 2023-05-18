import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBdqEJ1F1MoIY-5yQa3Y34JduIf2ibqfqw",
  authDomain: "twitter-demo-s.firebaseapp.com",
  projectId: "twitter-demo-s",
  storageBucket: "twitter-demo-s.appspot.com",
  messagingSenderId: "967771334498",
  appId: "1:967771334498:web:590bdb9e78ae3ce28bee3b",
  measurementId: "G-E1EXPCK764",
};

const app = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
export const auth = getAuth(app);
