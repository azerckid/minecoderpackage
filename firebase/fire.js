import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBDbUtYmRfUHo53vig1XrmLcCWphRzTTXM",
  authDomain: "reactnative-auth-fb5fc.firebaseapp.com",
  projectId: "reactnative-auth-fb5fc",
  storageBucket: "reactnative-auth-fb5fc.appspot.com",
  messagingSenderId: "1037643887516",
  appId: "1:1037643887516:web:1e506c840c46345d0a8e59",
  measurementId: "G-53VS64LTSH",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
