import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7ePApwi_iQXSsejWQpISb68yR_z8O8wY",
  authDomain: "ecommerce-f7b81.firebaseapp.com",
  projectId: "ecommerce-f7b81",
  storageBucket: "ecommerce-f7b81.appspot.com",
  messagingSenderId: "642247220764",
  appId: "1:642247220764:web:21b9f52bcfcdc80fdd09d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const initFirebase = () => app
export const db = getFirestore(app)