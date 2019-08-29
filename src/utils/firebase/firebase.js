import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyChS1W_zZWbCw102JNCXq9DalnAANbJ-bI',
  authDomain: 'crwn-db-htwr.firebaseapp.com',
  databaseURL: 'https://crwn-db-htwr.firebaseio.com',
  projectId: 'crwn-db-htwr',
  storageBucket: '',
  messagingSenderId: '187220932757',
  appId: '1:187220932757:web:24f3d1ba2fec3eb4'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
