var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
    apiKey: "AIzaSyCLWALH3BXzOW8i7DyLicKmShnk_wiM6L0",
    authDomain: "sphax-3618a.firebaseapp.com",
    projectId: "sphax-3618a",
    storageBucket: "sphax-3618a.appspot.com",
    messagingSenderId: "722978428398",
    appId: "1:722978428398:web:d1bfcb5ba9ab11a047aaff"
    // apiKey: "AIzaSyAq5EuwGXS1vRpD8vdmvTQnRWHT3r8nIpA",
    // authDomain: "aimhelper-8510a.firebaseapp.com",
    // databaseURL: "https://aimhelper-8510a.firebaseio.com",
    // projectId: "aimhelper-8510a",
    // storageBucket: "aimhelper-8510a.appspot.com",
    // messagingSenderId: "43997639659"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}
 
// var app_fireBase = {}; 
// (function(){
//     var config = {
//         apiKey: "AIzaSyCLWALH3BXzOW8i7DyLicKmShnk_wiM6L0",
//         authDomain: "sphax-3618a.firebaseapp.com",
//         projectId: "sphax-3618a",
//         storageBucket: "sphax-3618a.appspot.com",
//         messagingSenderId: "722978428398",
//         appId: "1:722978428398:web:d1bfcb5ba9ab11a047aaff"
//     };
//     firebase.initializeApp(config);
//   // Initialize Firebase
//     app_fireBase = firebase;
// })()