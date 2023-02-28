import {initializeApp} from 'firebase/app'
import {getDatabase} from 'firebase/database'
const firebaseConfig={
  apiKey: "AIzaSyBYR7iaWKIttSUYQqZlpPtS-tuOHG9WP2c",
  authDomain: "project-nckh-a9ec7.firebaseapp.com",
  databaseURL: "https://project-nckh-a9ec7-default-rtdb.firebaseio.com",
  projectId: "project-nckh-a9ec7",
  storageBucket: "project-nckh-a9ec7.appspot.com",
  messagingSenderId: "205483483868",
  appId: "1:205483483868:web:2001df204515bf9dbb8a19",
  measurementId: "G-YLZ7WRN34E",
  databaseURL: "https://project-nckh-a9ec7-default-rtdb.firebaseio.com/",
}
const app=initializeApp(firebaseConfig)
const database=getDatabase(app)
export default database