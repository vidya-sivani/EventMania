import firebase from "firebase/compat/app";
import "firebase/compat/database"
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDZcVqJcaL-N9MrwgDt_Jd8ji52HZfEgEM",
    authDomain: "event-mania-eddfe.firebaseapp.com",
    projectId: "event-mania-eddfe",
    storageBucket: "event-mania-eddfe.appspot.com",
    messagingSenderId: "10383217042",
    appId: "1:10383217042:web:e5a72c2becaa7f76cb314b",
    measurementId: "G-22GL4DK4YH"
  };

  firebase.initializeApp(firebaseConfig);
 export const db = firebase.firestore();

 // Initialize Firebase
//  const fireDb=firebase.initializeApp(firebaseConfig);
//  export default fireDb.database().ref();