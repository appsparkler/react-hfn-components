import React from 'react'

async function verifyFile({
  props, setDownloadURL, setIsVerifying, setMetadata}) {
  try {
    setIsVerifying(true)
    const downloadUrl = await props.storageRef.getDownloadURL()
    const metadata = await props.storageRef.getMetadata()
    setDownloadURL(downloadUrl)
    setMetadata(metadata)
    setIsVerifying(false)
    props.setFile({
      fileName: metadata.customMetadata.fileName,
      bytes: metadata.size,
      fullPath: metadata.fullPath,
      contentType: metadata.contentType,
      downloadUrl,
    })
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
  const [metadata, setMetadata] = React.useState(false)
  React.useEffect(componentDidMount.bind(null, {
    props, setDownloadURL, setIsVerifying, setMetadata,
  }), [])
  return {
    downloadURL,
    isVerifying,
    metadata,
  }
}
