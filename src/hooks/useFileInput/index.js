import {FirebaseApp} from '@react-hfn-singletons/firebase-storage-api'

function uploadFiles() {

}

function ensureFirebaseApp() {
  if (!FirebaseApp) {
    throw new Error('Please set the Firebase App with setFirebase')
  }
}

export default function useFileInput({props}) {
  ensureFirebaseApp()
  const inputAttrs = {
    type: (props && props.type) || 'file',
    multiple: (props && props.multiple) || false,
    className: `${props && props.className} input-file`,
  }
  return {
    inputAttrs,
    uploadFiles,
  }
}
