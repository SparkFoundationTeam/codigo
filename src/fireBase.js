import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDGD_8Ac6yzw2cepwHODbpYMLEJBjEvYaM",
  authDomain: "codigo-app-db1cc.firebaseapp.com",
  projectId: "codigo-app-db1cc",
  storageBucket: "codigo-app-db1cc.appspot.com",
  messagingSenderId: "537764766893",
  appId: "1:537764766893:web:c7148572dbf3d6253d1224",
  measurementId: "G-KQXEQVSFHG",
};

// Initialize Firebase
const iniApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = iniApp.firestore();

export { db };
