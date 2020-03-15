import React from 'react'
import FileInput from './FileInput'
import WebCamInput from './WebCamInput'

function handleMediaSourceChange({setMediaSource}, evt) {
  const mediaSource = evt.target.value
  setMediaSource(mediaSource)
}

const FirebaseCroppieWithWebCam = () => {
  const [mediaSource, setMediaSource] = React.useState(null)
  return (
    <div>
      <form>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            name="mediaSource"
            type="radio"
            value="file"
            onChange={handleMediaSourceChange.bind(null, {setMediaSource})}
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
          Upload File
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            name="mediaSource"
            type="radio"
            value="webcam"
            onChange={handleMediaSourceChange.bind(null, {setMediaSource})}
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
          Webcam
          </label>
        </div>
      </form>
      {(mediaSource === 'file') && <FileInput />}
      {(mediaSource === 'webcam') && <WebCamInput />}
    </div>
  )
}

export default FirebaseCroppieWithWebCam
