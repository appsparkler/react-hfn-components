import React from 'react'

async function verifyFile({props, setDownloadURL, setIsVerifying}) {
  try {
    setIsVerifying(true)
    const downloadUrl = await props.storageRef.getDownloadURL()
    setDownloadURL(downloadUrl)
  } catch (e) {
    setIsVerifying(false)
    setDownloadURL(null)
  }
}

function componentDidMount(inputs) {
  verifyFile({...inputs})
}

export default ({props}) => {
  const [downloadURL, setDownloadURL] = React.useState(null)
  const [isVerifying, setIsVerifying] = React.useState(false)
  React.useEffect(componentDidMount.bind(null, {
    props, setDownloadURL, setIsVerifying,
  }), [])
  return {
    downloadURL,
    isVerifying,
  }
}
