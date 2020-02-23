import React from 'react'

const UploadButton = (props) => {
  const {uploadPhoto} = useUploadButtonProps({props})
  return (
    <span>
      <button onClick={uploadPhoto}>Upload Photo</button>
    </span>
  )
}

export default UploadButton


function handleStateChange(snapshot) {
  console.log(`progress: ${(snapshot.bytesTransferred/snapshot.totalBytes)}`)
}

function handleError() {

}

function handleDone({props}) {
  props.setIsUploading(false)
}

async function uploadPhoto({props}, evt) {
  evt.preventDefault()
  evt.stopPropagation()
  const {storageRef, file2Upload} = props
  props.setIsUploading(true)
  const snapshot = storageRef.put(file2Upload)
  snapshot.on(
      'state_changed',
      handleStateChange,
      handleError,
      handleDone.bind(null, {props}),
  )
}

function useUploadButtonProps({props}) {
  return {
    uploadPhoto: uploadPhoto.bind(null, {props}),
  }
}
