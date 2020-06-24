require('firebase/firestore');

import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyDFD-lmcIM-puYZCk5KHCqDvNoSUPScyxU',
  authDomain: 'react-blog-39726.firebaseapp.com',
  databaseURL: 'https://react-blog-39726.firebaseio.com',
  projectId: 'react-blog-39726',
  storageBucket: 'react-blog-39726.appspot.com',
  messagingSenderId: '743381069832',
  appId: '1:743381069832:web:89e77abe88e4e287a3e1bd',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export const auth = firebase.auth();
export const firestore = firebase.firestore;
export default db;
