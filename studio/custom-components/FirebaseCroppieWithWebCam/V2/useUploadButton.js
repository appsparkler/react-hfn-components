// import React from 'react'
import {dataURL2Blob} from './utils'

export default ({croppedDataURL}) => {
  return {
    handleClick: (evt) => {
      const blob = dataURL2Blob(croppedDataURL)
      const file = new File([blob], 'pic')
      debugger
    },
  }
}
