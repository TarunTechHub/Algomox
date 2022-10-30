import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartFirebase(){
  const firebaseConfig = {
    apiKey: "AIzaSyAKXWFm7NyNlXt0hNZ4KYP3xviY2RV3pbQ",
    authDomain: "algomox-test.firebaseapp.com",
    databaseURL: "https://algomox-test-default-rtdb.firebaseio.com",
    projectId: "algomox-test",
    storageBucket: "algomox-test.appspot.com",
    messagingSenderId: "93689685057",
    appId: "1:93689685057:web:adc59c37a54add6bd692c0"
  };
      // Initialize Firebase
    const app = initializeApp(firebaseConfig); 

    return getDatabase(app);
}

export default StartFirebase;
