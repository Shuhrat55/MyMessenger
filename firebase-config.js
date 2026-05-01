const firebaseConfig = {
  apiKey: "AIzaSyD-твой-ключ",
  authDomain: "statcom-73911.firebaseapp.com",
  databaseURL: "https://statcom-73911-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "statcom-73911",
  storageBucket: "statcom-73911.appspot.com",
  messagingSenderId: "твой-sender-id",
  appId: "твой-app-id"
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };