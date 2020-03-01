import React from 'react'
import {Context} from '@react-hfn-components/FirebasePhotoInput/context'

const UploadButton = () => {
  const {uploadPhoto} = React.useContext(Context)
  return (
    <div className="UploadButton">
      <button
        className="btn btn-primary btn-lg btn-block"
        onClick={uploadPhoto}>Upload Photo</button>
    </div>
  )
}

export default UploadButton
