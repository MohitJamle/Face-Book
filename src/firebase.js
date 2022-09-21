import firebase from "firebase";

const firebaseConfig = {
  // this is where your firebase config goes
  apiKey: "AIzaSyCpqVh1mLdWEkaySlQxHA1LiNNfJeJ8rHE",
  authDomain: "facebook-1eabe.firebaseapp.com",
  projectId: "facebook-1eabe",
  storageBucket: "facebook-1eabe.appspot.com",
  messagingSenderId: "385544473178",
  appId: "1:385544473178:web:bc4f21bec9c00075806663",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();

export { auth, provider };
export default db;

// 3.4.3
