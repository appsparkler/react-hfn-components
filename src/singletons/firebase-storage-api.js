export default {
  get app() {
    return this._firebaseApp
  },
  set app(firebaseApp) {
    this._firebaseApp = firebaseApp
  },
}
