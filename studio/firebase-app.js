import firebase from 'firebase/app'
import 'firebase/storage'
import {setFirebaseApp} from '@appsparkler/react-hfn-components'

const {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
} = process.env

const firebaseConfig = {
  apiKey, authDomain, databaseURL,
  projectId, storageBucket,
  messagingSenderId, appId,
}

const FirebaseApp = firebase.initializeApp(firebaseConfig)

setFirebaseApp(FirebaseApp)

export default FirebaseApp
