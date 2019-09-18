import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//from firebase
var config = {
  apiKey: "AIzaSyCZo80iLsaL3WocqhPGEIayNuMv9rrxwBY",
  authDomain: "mario-plan-1c9bc.firebaseapp.com",
  databaseURL: "https://mario-plan-1c9bc.firebaseio.com",
  projectId: "mario-plan-1c9bc",
  storageBucket: "",
  messagingSenderId: "488627513197",
  appId: "1:488627513197:web:470dee28482d54a7339c64"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;