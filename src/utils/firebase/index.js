import { initializeApp } from "firebase/app";
import {
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  getAuth,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2W7TH30Ib5sil-pZArahprR52m5trnv0",
  authDomain: "mchatapp-ae5be.firebaseapp.com",
  projectId: "mchatapp-ae5be",
  storageBucket: "mchatapp-ae5be.appspot.com",
  messagingSenderId: "389045365818",
  appId: "1:389045365818:web:cc522e9147d3a25a6cd903",
  measurementId: "G-DH4Y28L6M3",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore(firebaseApp);
