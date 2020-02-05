import firebase from 'firebase/app'
import 'firebase/storage'
import {FirebaseUtils} from '@appsparkler/react-hfn-components'

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

FirebaseUtils.storage = FirebaseApp.storage()

export default FirebaseApp

export const putFile = (ref, file) => (FirebaseApp
    .storage()
    .ref(ref)
    .put(file)
)
