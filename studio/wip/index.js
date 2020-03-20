import React from 'react'
import PropTypes from 'prop-types'

function showVideoDidChange({showVideo, startVideo}) {
  if (showVideo === true) startVideo()
}

const WebcamInput = ({videoRef, startVideo, clickPhoto}) => {
  const [showVideo, setShowVideo] = React.useState(true)
  React.useEffect(showVideoDidChange.bind(null, {
    showVideo, startVideo,
  }), [showVideo])
  return (
    <div>
      <button className="btn btn-primary"
        onClick={() => {
          setShowVideo(!showVideo)
        }}>
          Toggle Video Element
      </button>
      {showVideo && (
        <div>
          <video ref={videoRef}></video>
          <button
            className="btn btn-primary"
            onClick={clickPhoto}
          >
            Click Photo
          </button>
        </div>
      )}
    </div>
  )
}

WebcamInput.propTypes = {
  videoRef: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
  startVideo: PropTypes.func.isRequired,
  clickPhoto: PropTypes.func.isRequired,
}

export default WebcamInput
