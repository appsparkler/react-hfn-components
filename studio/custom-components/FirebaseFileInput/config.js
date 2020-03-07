import FirebaseApp from '@react-hfn-studio/firebase-app'

const storageRef = FirebaseApp.storage().ref('/INAEIX292/ID_PROOF1')

export default {
  storageRef,
  maxBytes: .5 * 1024 * 1024,
}
