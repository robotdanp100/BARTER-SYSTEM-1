import firebase from "firebase"
require("@firebase/firestore");


var firebaseConfig = {
    apiKey: "AIzaSyDJ4jCM0OAAoN343WWx8i-L98OJ4-WKjtI",
    authDomain: "doctor-s-app-46b63.firebaseapp.com",
    projectId: "doctor-s-app-46b63",
    storageBucket: "doctor-s-app-46b63.appspot.com",
    messagingSenderId: "1073345058587",
    appId: "1:1073345058587:web:703e460d4fb9f5e323a5be"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();