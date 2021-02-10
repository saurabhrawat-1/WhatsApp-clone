import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTayf-uJ1AE136y7kp6RpnU4aa77qphgE",
  authDomain: "whatsapp-build-665e0.firebaseapp.com",
  projectId: "whatsapp-build-665e0",
  storageBucket: "whatsapp-build-665e0.appspot.com",
  messagingSenderId: "187969606385",
  appId: "1:187969606385:web:6a3316ce1549a87bde0f50",
  measurementId: "G-PHJZP199W2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
