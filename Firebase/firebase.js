import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAUCNbl63iO-ZEVJH7uW8ctPqlQzJgD6S0",
  authDomain: "miproyectofadi.firebaseapp.com",
  projectId: "miproyectofadi",
  storageBucket: "miproyectofadi.appspot.com",
  messagingSenderId: "737528409580",
  appId: "1:737528409580:web:5fc20366952d89985de4c9",
  measurementId: "G-JFB6XGCL2C"

};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
export {firebase};