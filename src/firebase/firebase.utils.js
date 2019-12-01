import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyCm8Rdxxo5qp0HBEO1yVQvXM0GWOKSBvu0",
    authDomain: "ecommerce-clothing-dd7b3.firebaseapp.com",
    databaseURL: "https://ecommerce-clothing-dd7b3.firebaseio.com",
    projectId: "ecommerce-clothing-dd7b3",
    storageBucket: "ecommerce-clothing-dd7b3.appspot.com",
    messagingSenderId: "4393129753",
    appId: "1:4393129753:web:3099b1ed4250c7f26a5788",
    measurementId: "G-SXYJ23C060"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

 // Setting up the Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })


// A function that will display the popup signin
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;