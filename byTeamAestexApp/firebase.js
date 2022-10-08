import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAPfU6rTIV_CcYJ87pYO3HOHHWfwN1qZIk",
  authDomain: "aestex-54ba5.firebaseapp.com",
  databaseURL: "https://aestex-54ba5-default-rtdb.firebaseio.com",
  projectId: "aestex-54ba5",
  storageBucket: "aestex-54ba5.appspot.com",
  messagingSenderId: "963515949809",
  appId: "1:963515949809:web:5b12b3ff8f1334ef3dbf50",
  measurementId: "G-4NG416CCXJ",
};
const iniApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

var db = iniApp.firestore();

export { db };
