import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzAXq9X4td5oEq4bmgSG7HsqRoEiD1czE",
  authDomain: "gabayguru-client.firebaseapp.com",
  projectId: "gabayguru-client",
  storageBucket: "gabayguru-client.appspot.com",
  messagingSenderId: "817775231843",
  appId: "1:817775231843:web:9998a0bbe445e0cb228956"
};

const app = initializeApp(firebaseConfig);

export default app;