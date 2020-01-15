import firebase from 'firebase/app';
import 'firebase/firestore'; // database
import 'firebase/auth'; // auth

const config = {
  apiKey: "AIzaSyCA70wCMnjV9w2VrgFph_u8q_ekboslFV0",
  authDomain: "dk-sales.firebaseapp.com",
  databaseURL: "https://dk-sales.firebaseio.com",
  projectId: "dk-sales",
  storageBucket: "dk-sales.appspot.com",
  messagingSenderId: "134540680150",
  appId: "1:134540680150:web:01508fdc3c75cbf7b02277",
  measurementId: "G-120XWP7LSH"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' }) // triggers Google prompt
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;