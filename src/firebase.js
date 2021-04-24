import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/analytics';

const firebaseConfig = {
      "apiKey" : "react.firebase",
      "projectId": "coviddb-ba00f",
      "appId": "1:893687899072:web:1d20d1087124f6461a5e25",
      "databaseURL": "https://coviddb-ba00f-default-rtdb.firebaseio.com",
      "storageBucket": "coviddb-ba00f.appspot.com",
      "locationId": "asia-east2",
      "authDomain": "coviddb-ba00f.firebaseapp.com",
      "messagingSenderId": "893687899072",
      "measurementId": "G-B1CY20WV3E"

};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const database = firebase.database();
// const storage = firebase.storage();

export default database
