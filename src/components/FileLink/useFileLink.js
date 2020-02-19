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

function componentDidMount({props, setIsVerifying}) {
  verifyFile({props, setIsVerifying})
}

export default ({props}) => {
  React.useEffect(componentDidMount.bind(null, {props}), [])
  return {
    isVerifying,
  }
}
