import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBnsDEwSUNzwRjeP3PceRaKXHe0YIq6WFk",
    authDomain: "sociallog-72f63.firebaseapp.com",
    projectId: "sociallog-72f63",
    storageBucket: "sociallog-72f63.appspot.com",
    messagingSenderId: "913267610138",
    appId: "1:913267610138:web:7b456248b5a324754f77a3"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  const auth = firebaseConfig.auth();
  export {fire, auth};