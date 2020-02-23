import React from 'react'
import PropTypes from 'prop-types'
import useCurrentPhoto from './useCurrentPhoto'

const CurrentPhoto = (props) => {
  useCurrentPhoto({props})
  return (
    <div className="Current Photo">
      {props.downloadURL &&
        <>
          <h3>Current Photo: </h3>
          <img src={ props.downloadURL } />
        </>
      }
    </div>
  )
}

CurrentPhoto.propTypes = {
  storageRef: PropTypes.object,
}

export default CurrentPhoto
