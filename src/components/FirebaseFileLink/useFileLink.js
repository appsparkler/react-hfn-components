import React from 'react'

async function verifyFile({props, hooks}) {
  try {
    hooks.setIsVerifying(true)
    const downloadURL = await props.storageRef.getDownloadURL()
    const metadata = await props.storageRef.getMetadata()
    hooks.setIsVerifying(false)
    hooks.setFile({
      fileName: metadata?.customMetadata?.fileName || 'file',
      bytes: metadata.size,
      fullPath: metadata.fullPath,
      contentType: metadata.contentType,
      downloadURL,
    })
  } catch (e) {
    hooks.setIsVerifying(false)
    console.error(e)
  }
}

function componentDidMount({props, hooks}) {
  verifyFile({props, hooks})
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
    verifyFile: verifyFile.bind(null, {props, hooks}),
  }
}
