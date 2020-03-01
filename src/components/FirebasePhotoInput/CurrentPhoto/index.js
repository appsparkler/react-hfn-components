import React from 'react'
import {Context} from '@react-hfn-components/FirebasePhotoInput/context'

const CurrentPhoto = () => {
  const ctx = React.useContext(Context)
  return (
    <div className="CurrentPhoto">
      {ctx.downloadURL &&
        <>
          <h5 className="text-muted">Current Photo:</h5>
          <img
            className="img-thumbnail"
            height="100"
            width="113"
            src={ ctx.downloadURL } />
        </>
      }
      {!ctx.downloadURL &&
        <div className="alert alert-warning">
          <strong>No Pic Uploaded...</strong>
        </div>
      }
    </div>
  )
}

export default CurrentPhoto
