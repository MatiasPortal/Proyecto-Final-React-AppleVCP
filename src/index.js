import './index.css';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6RtT5nhJQENiU_DR051zmHaZlc8iESP8",
  authDomain: "proyecto-coder-react-89b58.firebaseapp.com",
  projectId: "proyecto-coder-react-89b58",
  storageBucket: "proyecto-coder-react-89b58.appspot.com",
  messagingSenderId: "1408524209",
  appId: "1:1408524209:web:62ba52629a94c6dff1e790"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

