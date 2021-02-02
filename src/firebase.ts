import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2Iwsx5CIQOOxme71aP3mMkn4-RCccl80",
  authDomain: "sedentarysavior.firebaseapp.com",
  projectId: "sedentarysavior",
  storageBucket: "sedentarysavior.appspot.com",
  messagingSenderId: "595566022690",
  appId: "1:595566022690:web:df7dfa670800867f29fa7b",
  measurementId: "G-JYRB8YCJBW",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore;
