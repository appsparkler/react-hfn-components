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
    <div>
      <div className="col-6">
        <div className="img-thumbnail rounded-0">
          <video className="w-100"
            ref={videoRef}
          >
            Video stream not available.
          </video>
        </div>
        <div className="mt-2">
          <button className="btn btn-block btn-primary rounded-0">
          Take photo
          </button>
        </div>
      </div>

      {/*
      <button id="startbutton" ref={buttonRef}>
        Take photo
      </button>
      */}

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
