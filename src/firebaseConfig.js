import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = firebase.firestore()
export const fs = firebase.storage()