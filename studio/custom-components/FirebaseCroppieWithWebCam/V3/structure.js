import React from 'react'
import PropTypes from 'prop-types'

const FirebaseSuperCroppie = ({
  file, isUploading, mediaSource,
}) => {
  return (
    <div>

      <div>
        {/* Current Profile Photo*/}
        {file.downloadURL && !isUploading && <img src="download-url" />}
        {!file.downloadURL && !isUploading && <span>Pic Not Uploaded</span>}
        {isUploading && <span>Is Uploading...</span>}
      </div>

      <div>
        {/* Radio Buttons To Choose Media Source*/}
        <form>
          <input type="radio" name="mediaSource" value="file" />
          <input type="radio" name="mediaSource" value="webcam" />
        </form>
      </div>

      {mediaSource === 'file' && (
        <div>
          {/* mediaSource === file*/}
          <input type="file" />
          <div>Croppie</div>
          <div>
            Preview Image
            Upload Button
            Progress Bar
          </div>
        </div>
      )}

      {mediaSource === 'webcam' && (
        <div>
          <div>Webcam Capturer</div>
          <div>
            Webcam Preview
            Take Picture Button
          </div>
          <div>Croppie</div>
          <div>
            Upload Button
            Progress Bar
          </div>
        </div>
      )}

    </div>
  )
}

FirebaseSuperCroppie.propTypes = {
  file: PropTypes.object,
  mediaSource: PropTypes.string,
  isUploading: PropTypes.boolean,
}

export default FirebaseSuperCroppie
