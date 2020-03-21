import React from 'react'
import WebcamInput from './wip'
import PropTypes from 'prop-types'
import useWebcamInput from './wip/useWebcamInput'
import './styles'

function showVideoDidChange({
  showVideo, startVideo, videoRef, setDataURL,
}) {
  if (showVideo === true && videoRef.current) {
    startVideo()
    setDataURL(null)
  }
}

const ShowHideText = ({showVideo}) => (
  <>
    <span>{showVideo && 'Hide '}</span>
    <span>{!showVideo && 'Show '}</span>
  </>
)

ShowHideText.propTypes = {
  showVideo: PropTypes.bool.isRequired,
}

const StudioApp = () => {
  const videoRef = React.useRef()
  const [dataURL, setDataURL] = React.useState(null)
  const [showVideo, setShowVideo] = React.useState(false)
  const {clickPhoto, startVideo} = useWebcamInput({videoRef, setDataURL})
  React.useEffect(showVideoDidChange.bind(null, {
    showVideo, startVideo, videoRef, setDataURL,
  }), [showVideo])
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-3">
          <button className="btn btn-primary rounded-0"
            onClick={() => {
              setShowVideo(!showVideo)
            }}>
            <ShowHideText showVideo={showVideo}/>
            Cam
          </button>
        </div>
        <div className="col-5">
          {showVideo && <WebcamInput videoRef={videoRef} />}
          {showVideo && (
            <button
              className="btn btn-success rounded-0"
              onClick={clickPhoto}
            >
            Click!
            </button>
          )}
        </div>
        <div className="col-4">
          {showVideo && dataURL && (
            <img className="img-thumbnail" src={dataURL} />
          )}
        </div>
      </div>
    </div>
  )
}

export default StudioApp
