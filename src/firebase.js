import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAo8AxBBngahzrAl81igC1lRU-jw5CZYUE",
  authDomain: "facebook-clone-955e6.firebaseapp.com",
  databaseURL: "https://facebook-clone-955e6.firebaseio.com",
  projectId: "facebook-clone-955e6",
  storageBucket: "facebook-clone-955e6.appspot.com",
  messagingSenderId: "980591054360",
  appId: "1:980591054360:web:09960b3946e4a0140e7d6d",
  measurementId: "G-LGRR4F5CXX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;