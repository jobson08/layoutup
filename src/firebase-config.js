const Rebase = require('re-base')
const firebase = require('firebase')

const FirebaseConfig = {
  apiKey: "AIzaSyCnW8n6DJWh_jhnGaBtmo7DrEPo3E37ODw",
   authDomain: "layoutup-f9915.firebaseapp.com",
   databaseURL: "https://layoutup-f9915.firebaseio.com",
   projectId: "layoutup-f9915",
   storageBucket: "layoutup-f9915.appspot.com",
   messagingSenderId: "962706938290"
 }

 const app = firebase.initializeApp(FirebaseConfig)
 const config = Rebase.createClass(app.database())

 export const storage = app.storage()

export default config;
