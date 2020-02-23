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


function uploadPhoto({props}, evt) {
  evt.preventDefault()
  evt.stopPropagation()
  const {storageRef, file2Upload} = props
  storageRef.put(file2Upload).then(console.log)
}

function useUploadButtonProps({props}) {
  return {
    uploadPhoto: uploadPhoto.bind(null, {props}),
  }
}
