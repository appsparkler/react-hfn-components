import React from 'react'
import PropTypes from 'prop-types'
import {Stack} from 'office-ui-fabric-react'

const Video = ({videoRef}) => (
  <Stack.Item align="center">
    <div style={{
      width: '300px', height: '300px',
      outline: '1px blue solid',
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
    current: PropTypes.any.isRequired,
  }),
}

export default Video
