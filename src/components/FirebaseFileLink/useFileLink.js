import React from 'react'

async function verifyFile({props, hooks}) {
  try {
    hooks.setIsVerifying(true)
    const downloadURL = await props.storageRef.getDownloadURL()
    const metadata = await props.storageRef.getMetadata()
    hooks.setIsVerifying(false)
    hooks.setFile({
      fileName: metadata.customMetadata.fileName,
      bytes: metadata.size,
      fullPath: metadata.fullPath,
      contentType: metadata.contentType,
      downloadURL,
    })
  } catch (e) {
    hooks.setIsVerifying(false)
  }
}

function componentDidMount({props}) {
  verifyFile({props})
}

export default (props) => {
  const [file, setFile] = React.useState(null)
  const [isVerifying, setIsVerifying] = React.useState(false)
  const hooks = {
    file, setFile,
    isVerifying, setIsVerifying,
  }
  React.useEffect(componentDidMount.bind(null, {props, hooks}), [])
  return {
    ...props,
    ...hooks,
  }
}
