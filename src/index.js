import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBWnIMqulljmx_hgeqOZ6OnUg2HnqAXUZo",
  authDomain: "item-cioccolata-coder.firebaseapp.com",
  projectId: "item-cioccolata-coder",
  storageBucket: "item-cioccolata-coder.appspot.com",
  messagingSenderId: "1096762287870",
  appId: "1:1096762287870:web:7c42cd5b8d0069db85e7af"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


