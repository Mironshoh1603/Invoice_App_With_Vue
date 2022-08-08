import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAYraq_TNyJ3jbf8IKqpUkHk9DNG8F9Iys",
  authDomain: "invoice-app-mir.firebaseapp.com",
  projectId: "invoice-app-mir",
  storageBucket: "invoice-app-mir.appspot.com",
  messagingSenderId: "439185982793",
  appId: "1:439185982793:web:86577940ad48a3bbbb4698",
};

const firebaseApp = initializeApp(firebaseConfig);

export default getFirestore(firebaseApp);
