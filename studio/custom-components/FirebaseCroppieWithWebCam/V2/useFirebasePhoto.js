import React from 'react'

async function verifyFile({
  storageRef, setFile, setIsVerifying,
}) {
  try {
    const downloadURL = await storageRef.getDownloadURL()
    const metadata = await storageRef.getMetadata()
    const file = {
      fileName: metadata?.customMetadata?.fileName || 'file',
      bytes: metadata.size,
      fullPath: metadata.fullPath,
      contentType: metadata.contentType,
      downloadURL,
    }
    setFile(file)
  } catch (e) {
    setFile(null)
  } finally {
    setIsVerifying(false)
  }
}

function componentDidMount({
  storageRef, setFile, setIsVerifying,
}) {
  setIsVerifying(true)
  verifyFile({storageRef, setFile, setIsVerifying})
}

export default ({storageRef}) => {
  const [isVerifying, setIsVerifying] = React.useState(false)
  const [file, setFile] = React.useState(null)
  React.useEffect(componentDidMount.bind(null, {
    storageRef,
    setFile, setIsVerifying,
  }), [])
  return {
    isVerifying,
    file,
  }
}
