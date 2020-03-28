import React from 'react'
import {MemoMediaSourceForm} from '@react-hfn-hoc/MediaSourceForm'
import './styles'

const StudioApp = () => {
  return (
    <div className="ms-Grid" dir="ltr">
      <MemoMediaSourceForm
        mediaSource={'webcam'}
        disabled
      />
    </div>
  )
}

export default StudioApp
