import React from 'react'

const deleteFile = async ({props, setIsDeleting}) => {
  setIsDeleting(true)
  const {storageRef, sharedState} = props
  const {setFile} = sharedState
  await storageRef.delete()
  setIsDeleting(false)
  setFile(null)
}

function verifyFile({props, setIsVerifying}) {
  const {setFile, storageRef} = props
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

export default function useFileLinkWithDeleteButton({props}) {
  const {file, setFile} = props.sharedState
  const [isDeleting, setIsDeleting] = React.useState(false)
  const [isVerifying, setIsVerifying] = React.useState(true)
  React.useEffect(componentDidMount.bind(null, {props, setIsVerifying}), [])
  return {
    deleteFile: deleteFile.bind(null, {props, setIsDeleting}),
    file,
    isDeleting,
    isVerifying
  }
}
