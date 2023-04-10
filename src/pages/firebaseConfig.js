// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsSy7FYJdcUfyyYcL_mDw5X1mAL-zFpLk",
  authDomain: "confplus-9a063.firebaseapp.com",
  projectId: "confplus-9a063",
  storageBucket: "confplus-9a063.appspot.com",
  messagingSenderId: "930697619725",
  appId: "1:930697619725:web:4af0bce862983c076aa844",
  measurementId: "G-8W9G40TR96"
};

// const storage = getStorage(app);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export default storage;


const storage = getStorage(app);
export default storage;