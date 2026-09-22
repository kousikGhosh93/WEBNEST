import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAUtRKU27KwDGaL2a97zDgfN_SoxHYcGvg",
  authDomain: "webnest-e060b.firebaseapp.com",
  projectId: "webnest-e060b",
  storageBucket: "webnest-e060b.firebasestorage.app",
  messagingSenderId: "430212517013",
  appId: "1:430212517013:web:41550ecc7e2285a8d3df9c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
