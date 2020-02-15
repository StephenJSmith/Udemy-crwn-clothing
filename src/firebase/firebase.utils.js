import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCb2Xw3rkpSFu9yu9uNmx-csdFWEicKbUA",
  authDomain: "crwn-db-9a031.firebaseapp.com",
  databaseURL: "https://crwn-db-9a031.firebaseio.com",
  projectId: "crwn-db-9a031",
  storageBucket: "crwn-db-9a031.appspot.com",
  messagingSenderId: "15302340332",
  appId: "1:15302340332:web:d1195a233471d2ad813fc9",
  measurementId: "G-TS6NP2PK1J"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

