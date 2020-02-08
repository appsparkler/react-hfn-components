// export default {
//   get app() {
//     return this._firebaseApp
//   },
//   set app(firebaseApp) {
//     this._firebaseApp = firebaseApp
//   },
// }

export let FirebaseApp = null

export default (app) => {
  FirebaseApp = app
}
