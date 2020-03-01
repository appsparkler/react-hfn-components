import FirebaseApp from './firebase-app'

const storageRef = FirebaseApp.storage().ref('INAAAEX32/profilePics/')

export default {
  storageRef,
  onUpload: (file) => {
    console.log(file)
  },
}
