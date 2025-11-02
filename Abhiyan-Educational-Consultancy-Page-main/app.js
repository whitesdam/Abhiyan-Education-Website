// Import Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Initialize Firestore


// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyABmroA9r1IY_eYwxIYQpvWKNz637MDgLs",
  authDomain: "abhiya-edu-project.firebaseapp.com",
  projectId: "abhiya-edu-project",
  storageBucket: "abhiya-edu-project.firebasestorage.app",
  messagingSenderId: "762351479763",
  appId: "1:762351479763:web:59846a5da5d65cf4e95d26",
  measurementId: "G-Z5F98NR45C"
};
const db = getFirestore(app);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

console.log("Firebase initialized:", app);
async function addUser() {
  try {
    const docRef = await addDoc(collection(db, "users"), { // "users" is the collection name
      name: "Himanshu",
      email: "himanshu@example.com",
      age: 22
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// Call the function
addUser();

