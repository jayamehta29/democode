import firebase from "firebase";

let firebaseConfig = {
  apiKey: "AIzaSyD6GB8dIbB_32UGrw0zog5JhOfuIuTIT-I",
  authDomain: "logindemo-8f376.firebaseapp.com",
  projectId: "logindemo-8f376",
  storageBucket: "logindemo-8f376.appspot.com",
  messagingSenderId: "85560460984",
  appId: "1:85560460984:web:da88ae640f5f010145164d"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
export let firebaseAuth = firebaseApp.auth();
export let firebaseStorage = firebaseApp.storage();
export let firebaseDB = firebaseApp.firestore();
export let timeStamp = firebase.firestore.FieldValue.serverTimestamp;