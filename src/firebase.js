import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCdLbJbs_fHiro11_bId1beUkqzf2qBtuo",
    authDomain: "clone-e92dd.firebaseapp.com",
    projectId: "clone-e92dd",
    storageBucket: "clone-e92dd.appspot.com",
    messagingSenderId: "911076397766",
    appId: "1:911076397766:web:8f2e1fd75f506c40effdc7",
    measurementId: "G-YWCSB28EZ9"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };