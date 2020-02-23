import React from 'react'

function handleStateChange({props}, snapshot) {
  if (snapshot.totalBytes) {
    props.setProgress((snapshot.bytesTransferred/snapshot.totalBytes) * 100)
  }
}

function handleError() {

}

function handleDone({props}) {
  props.setProgress(100)
  props.setIsUploading(false)
  props.setUploaded(true)
  props.onUpload(true)
}

async function uploadPhoto({props}, evt) {
  evt.preventDefault()
  evt.stopPropagation()
  const {storageRef, file2Upload} = props
  props.setIsUploading(true)
  const snapshot = storageRef.put(file2Upload)
  snapshot.on(
      'state_changed',
      handleStateChange.bind(null, {props}),
      handleError,
      handleDone.bind(null, {props}),
  )
}

export default function({props}) {
  return {
    uploadPhoto: uploadPhoto.bind(null, {props}),
  }
}
