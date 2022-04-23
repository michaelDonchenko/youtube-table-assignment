import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDUxkVh0Tm7aiKDBrZtSahGRZpKxPbsiFE',
  authDomain: 'table-assignment-bd225.firebaseapp.com',
  projectId: 'table-assignment-bd225',
  storageBucket: 'table-assignment-bd225.appspot.com',
  messagingSenderId: '1024764164257',
  appId: '1:1024764164257:web:62876ee4c502d101f258e0',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
