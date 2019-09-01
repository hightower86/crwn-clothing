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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  //console.log(userAuth.uid);
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  //console.log(userRef);

  const snapShot = await userRef.get();

  //console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
