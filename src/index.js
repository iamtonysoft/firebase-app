var firebase = require('firebase');

 var config = {
    apiKey: "AIzaSyDqO_yaJwkSgJRF1qniNQTOTFF9GbAY4Hw",
    authDomain: "fir-app-37053.firebaseapp.com",
    databaseURL: "https://fir-app-37053.firebaseio.com",
    projectId: "fir-app-37053",
    storageBucket: "fir-app-37053.appspot.com",
    messagingSenderId: "523354474297"
};
firebase.initializeApp(config);

var bigOne = document.getElementById('bigOne');
var dbRef = firebase.database().ref().child('text');
dbRef.on('value', snap => bigOne.innerText = snap.val());