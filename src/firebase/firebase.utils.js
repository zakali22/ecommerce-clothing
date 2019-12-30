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

export const createUserOnDatabase = async (userAuth, otherParams) => {
	if(!userAuth) return;

	const userDoc = firestore.doc(`/user/${userAuth.uid}`);  // Fetches the documentReference for the given user allowing us to do CRUD
	const snapShot = userDoc.get(); // To get the actual data of the user

	if(!snapShot.exists){
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userDoc.set({
				displayName, 
				email,
				createdAt,
				...otherParams
			})
		} catch(err){
			console.log(err)
		}
	}

	return userDoc;

}

// Function that can be used to create new Documents in the future
export const addCollectionsAndDocuments = (collectionKey, objectToAdd) => {
	const collectionRef = firestore.collection(collectionKey)
	const batch = firestore.batch();

	objectToAdd.forEach(obj => {
		const newDoc = collectionRef.doc();
		batch.set(newDoc, obj)
	})

	batch.commit();
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

 // Setting up the Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })


// A function that will display the popup signin
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;