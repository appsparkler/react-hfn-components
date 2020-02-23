import React from 'react'

async function setDownloadURLOnState({props}) {
  const downloadURL = await props.storageRef.getDownloadURL()
  props.setDownloadURL(downloadURL)
}

function componentDidMount({props}) {
  setDownloadURLOnState({props})
}

export default ({props}) => {
  React.useEffect(componentDidMount.bind(null, {props}), [])
  return {

  }
}
