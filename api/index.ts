import firebase from 'firebase/app';
import 'firebase/firestore';
import riotAPI, { RiotAPI } from './riotgames';

export interface API {
  users: firebase.firestore.CollectionReference;
  patchData: firebase.firestore.CollectionReference;
  summoners: firebase.firestore.CollectionReference;
  riotAPI: RiotAPI;
}

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
  });
}

const store = firebase.firestore();

const api: API = {
  users: store.collection('user'),
  patchData: store.collection('patch'),
  summoners: store.collection('summoners'),
  riotAPI,
};

export default api;
