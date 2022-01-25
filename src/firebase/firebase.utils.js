import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD6QD3GgXfy4r5vIJbHVexL0gWvroS81sw",
    authDomain: "crwn-db-8c296.firebaseapp.com",
    projectId: "crwn-db-8c296",
    storageBucket: "crwn-db-8c296.appspot.com",
    messagingSenderId: "776988398143",
    appId: "1:776988398143:web:47fe3a2d945ea5b85a5e8a"
};
firebase.initializeApp(firebaseConfig)
export const firestore = firebase.firestore();
// const app = initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additiondalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName, email, createdAt, ...additiondalData
            })
        } catch (err) {
            console.log('error creating user ', err.message)
        }
    }
    return userRef
}

const provider = new GoogleAuthProvider();
export const auth = firebase.auth();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
}).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
});
;

export default firebase;