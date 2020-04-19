import React from 'react'
import PropTypes from 'prop-types'
import {
  /* TextField, Image, DefaultButton,*/ Stack,
} from 'office-ui-fabric-react'
import ProfilePhoto from './ProfilePhoto'
import useFirebaseSuperCroppie from './useFirebaseSuperCroppie'

const FirebaseSuperCroppie = ({onUpload}) => {
  const {
    // videoRef,
    // dataURL, clickPhoto,
  } = useFirebaseSuperCroppie({onUpload})
  return (
    <Stack
      horizontalAlign="center"
      horizontal
      gap="20"
      wrap
    >
      <ProfilePhoto
        src="http://placekitten.com/180/180"
      />
      <Stack.Item>
        <div style={{border: '1px slategray dashed', padding: '10px'}}>
          <h2>Edit Photo</h2>

        </div>
      </Stack.Item>
      {/* <Stack.Item>
        <video
          ref={videoRef}
          playsInline
          autoPlay
          height="300"
          width="300"
        />
        <Image src={dataURL} width={300} />
        <DefaultButton
          onClick={clickPhoto}
          text="Click Photo"
        />
      </Stack.Item>
      <Stack.Item>

      </Stack.Item>
      <canvas ref={canvasRef} />

      <TextField
        multiline
        autoAdjustHeight
        value={JSON.stringify(browserDetails)}
      />
      <TextField
        multiline
        autoAdjustHeight
        value={JSON.stringify(dataURL)}
      />*/}
    </Stack>
  )
}

FirebaseSuperCroppie.propTypes = {
  onUpload: PropTypes.func.isRequired,
}

FirebaseSuperCroppie.defaultProps = {
  onUpload: () => {},
}

export default FirebaseSuperCroppie
