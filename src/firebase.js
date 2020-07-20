import firebase from 'firebase/app';
import 'firebase/firestore'
// import 'firebase/auth';
// import 'firebase/firebase-firestore'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBBDasXixm2a6aIayZMdLKQpSf8x2PETJI",
    authDomain: "todolist-dac5f.firebaseapp.com",
    databaseURL: "https://todolist-dac5f.firebaseio.com",
    projectId: "todolist-dac5f",
    storageBucket: "todolist-dac5f.appspot.com",
    messagingSenderId: "982083472438",
    appId: "1:982083472438:web:76a23069a7c21f98e55c97",
    measurementId: "G-MH5DR3KX7V"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export default firebase;

