import FirebaseApp from '@react-hfn-studio/firebase-app'

export const storageRef = FirebaseApp.storage().ref('INAAAEX32/profilePics1/')

export default {
  maxBytes: 2 * 1024 * 1024,
  storageRef,
}
