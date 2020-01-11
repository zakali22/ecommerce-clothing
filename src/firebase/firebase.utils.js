import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyBdVWWWjOJFNPkaE2RnUV9nv2_1v33i2Ec",
    authDomain: "ecommerce-clothing-dev.firebaseapp.com",
    databaseURL: "https://ecommerce-clothing-dev.firebaseio.com",
    projectId: "ecommerce-clothing-dev",
    storageBucket: "ecommerce-clothing-dev.appspot.com",
    messagingSenderId: "251476737408",
    appId: "1:251476737408:web:4a549b0412a13f03691565",
    measurementId: "G-K3ST676996"
  };;

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

export const convertCollectionToMap = (collection) => {
	const transformedCollection = collection.docs.map(doc => {
		const {title, items} = doc.data();

		return {
			id: doc.id, 
			routeName: encodeURI(title.toLowerCase()),
			title, 
			items
		}
	})

	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator
	}, {})

}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

 // Setting up the Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })


// A function that will display the popup signin
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;