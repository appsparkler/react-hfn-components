import React from 'react'
import useFileFromStorageRef from './useFileFromStorageRef'

function componentDidMount({verifyFile}) {
  verifyFile()
}

export default ({storageRef, croppieConfig}) => {
  const [file, setFile] = React.useState(null)
  const [isVerifying, setIsVerifying] = React.useState(false)
  const {verifyFile} = useFileFromStorageRef({
    setFile, setIsVerifying, storageRef,
  })
  React.useEffect(componentDidMount.bind(null, {
    verifyFile,
  }), [])
  return {
    file,
    isVerifying,
  }
}
