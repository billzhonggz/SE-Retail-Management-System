/* eslint-disable no-new */
/* eslint-disable quotes,semi */
var firebase = require("firebase");

let config = {
  apiKey: 'AIzaSyDxF-ZmWZP0qtgeQQli2oPCTn6hw4aovbo',
  authDomain: 'se-retail.firebaseapp.com',
  databaseURL: 'https://se-retail.firebaseio.com',
  projectId: 'se-retail',
  storageBucket: 'se-retail.appspot.com',
  messagingSenderId: '193615524398'
};

// let config = {
//   apiKey: "AIzaSyBhr-1yhcgKdqiyYwPRWJ2DatlzxzonHhs",
//   authDomain: "se-retail-management.firebaseapp.com",
//   databaseURL: "https://se-retail-management.firebaseio.com",
//   projectId: "se-retail-management",
//   storageBucket: "se-retail-management.appspot.com",
//   messagingSenderId: "729149844491"
// };

let app = firebase.initializeApp(config);
module.exports = app.database();
