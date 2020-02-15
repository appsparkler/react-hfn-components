import React from 'react'
import FileUploadDetails from '@react-hfn-components/FileUploadDetails'
import {FirebaseApp} from '@react-hfn-singletons/firebase-storage-api'

export default (props) => {
  const {inputAttrs, uploadFiles, ensureFirebaseApp} = useFileInput({props})
  ensureFirebaseApp()
  return (
    <div className="React-HFN-FileInput">
      <input
        {...inputAttrs}
        onInput={uploadFiles}
      />
      <FileUploadDetails uploadDetails={[]} />
    </div>
  )
}

function uploadFiles() {

}

function ensureFirebaseApp() {
  if (!FirebaseApp) {
    throw new Error('Please set the Firebase App with setFirebase')
  }
}

function useFileInput({props}) {
  const inputAttrs = {
    type: (props && props.type) || 'file',
    multiple: (props && props.multiple) || false,
    className: `${props && props.className} input-file`,
  }
  return {
    inputAttrs,
    uploadFiles,
    ensureFirebaseApp,
  }
}
