import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyASirBG71Y2J9DkY-C3-Wfj1bIgZ9w8AQw",
  authDomain: "netflix-clone-98194.firebaseapp.com",
  projectId: "netflix-clone-98194",
  storageBucket: "netflix-clone-98194.appspot.com",
  messagingSenderId: "119897821771",
  appId: "1:119897821771:web:6fb9260a09ecc97aa2b3ce",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
