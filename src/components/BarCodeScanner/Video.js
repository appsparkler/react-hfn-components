import React from 'react'
import PropTypes from 'prop-types'
import {Stack} from 'office-ui-fabric-react'

const Video = ({videoRef}) => (
  <Stack.Item align="center">
    <div style={{
      width: '200px', height: '200px',
      outline: '1px lightGray solid',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center',
    }}>
      <video
        height="300"
        width="300"
        ref={videoRef}
      >
      </video>
    </div>
  </Stack.Item>
)

Video.propTypes = {
  videoRef: PropTypes.shape({
    current: PropTypes.any,
  }),
}

export default Video
