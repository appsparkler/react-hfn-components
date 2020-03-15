import React from 'react'
import useWebCam from './useWebCam'

const WebCamInput = ({}) => {
  const {
    videoRef,
    canvasRef,
    photoRef,
    buttonRef,
  } = useWebCam()
  return (
    <div className="camera">
      <video id="video"
        ref={videoRef}
        style={{outline: '12px slateBlue solid'}}
      >
        Video stream not available.
      </video>
      <button id="startbutton" ref={buttonRef}>
        Take photo
      </button>

      <div className="position-fixed" style={{left: '10000px'}}>
        {
          <canvas id="canvas"
            ref={canvasRef}
            style={{outline: '20px midnightBlue solid'}}
          >
          </canvas>
        }

        <div className="output">
          <h3>IMAGE...</h3>
          <img
            id="photo"
            alt="The screen capture will appear in this box."
            ref={photoRef}/>
        </div>
      </div>
    </div>
  )
}

export default WebCamInput
