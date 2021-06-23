import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';

firebase.initializeApp({
  apiKey: 'AIzaSyDVZURkSbdfpEzJPka6ydK_rcIid_YeuaA',
  authDomain: 'menoscaosxfavor.firebaseapp.com',
  projectId: 'menoscaosxfavor',
  storageBucket: 'menoscaosxfavor.appspot.com',
  messagingSenderId: '1044870555490',
  appId: '1:1044870555490:web:3ba9220a1c64211c082e3b',
  measurementId: 'G-5HY09LG96F',
});

const db = firebase.firestore();
const fs = firebase;
var storage = firebase.storage;

export { db, fs, storage };

ReactDOM.render(<App />, document.getElementById('root'));
