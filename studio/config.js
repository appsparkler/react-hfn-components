import FirebaseApp from './firebase-app'

const storageRef = FirebaseApp.storage().ref('INAAAEX32/profilePics/')

export default {
  maxBytes: 2 * 1024 * 1024,
  storageRef,
  onUpload: (file) => {
    console.log(file)
  },
}
