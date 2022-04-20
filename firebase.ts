// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8_0MBzBeEuAxIEgzeGUjFFq5Pdvcl8U8",
  authDomain: "netflix-68796.firebaseapp.com",
  projectId: "netflix-68796",
  storageBucket: "netflix-68796.appspot.com",
  messagingSenderId: "256946973189",
  appId: "1:256946973189:web:16a0bbf9665a52d7a38a6c",
  measurementId: "G-BQ2S1HGEKH"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }