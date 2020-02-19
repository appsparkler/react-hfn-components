import React from 'react'

function verifyFile({props}) {
  const {
    setFile,
    setIsVerifying,
    storageRef,
  } = props
  storageRef.getDownloadURL()
      .catch((err)=> {
        if (err.code === 'storage/object-not-found') setFile(null)
      })
      .finally(() => {
        setIsVerifying(false)
      })
}

function componentDidMount({props}) {
  verifyFile({props})
}

export default ({props}) => {
  React.useEffect(componentDidMount.bind(null, {props}), [])
  return {
    ...props,
  }
}
