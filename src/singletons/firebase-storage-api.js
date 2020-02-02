export default {
  get storage() {
    return this.firebaseStorage
  },
  set storage(firebaseStorage) {
    this.firebaseStorage = firebaseStorage
  },
}
