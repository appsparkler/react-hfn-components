import React from 'react'

function handleStateChange({props}, snapshot) {
  if (snapshot.totalBytes) {
    props.setProgress((snapshot.bytesTransferred/snapshot.totalBytes) * 100)
  }
}

function handleError() {

}

async function handleDone({props, task}) {
  props.setProgress(100)
  props.setIsUploading(false)
  props.setUploaded(true)
  props.onUpload(true)
  await task
  const downloadURL = await task.snapshot.ref.getDownloadURL()
  const {
    fullPath,
    contentType,
    name,
    size,
    timeCreated,
    updated,
  } = task.snapshot.metadata
  const payload = {
    downloadURL,
    fullPath,
    contentType,
    fileName: name,
    size,
    timeCreated,
    updated,
  }
  props.onUpload(payload)
  props.setDownloadURL(downloadURL)
}

async function uploadPhoto({props}, evt) {
  evt.preventDefault()
  evt.stopPropagation()
  const {storageRef, file2Upload} = props
  props.setIsUploading(true)
  const task = storageRef.put(file2Upload)
  task.on(
      'state_changed',
      handleStateChange.bind(null, {props}),
      handleError,
      handleDone.bind(null, {props, task}),
  )
}

export default function({props}) {
  return {
    uploadPhoto: uploadPhoto.bind(null, {props}),
  }
}
