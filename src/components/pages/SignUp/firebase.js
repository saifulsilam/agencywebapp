import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyD-iUX2ersCGmTJAFpvPABUcYLJBCkNu_s",
    authDomain: "react-app-43e8b.firebaseapp.com",
    projectId: "react-app-43e8b",
    storageBucket: "react-app-43e8b.appspot.com",
    messagingSenderId: "1012447164744",
    appId: "1:1012447164744:web:b54bcc061b114658d3db7d",
    measurementId: "G-1PRVECXDHS"
  });

  const db=firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };