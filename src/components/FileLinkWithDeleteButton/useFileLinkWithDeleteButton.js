import React from 'react'

const deleteFile = async ({props, setIsDeleting}) => {
  setIsDeleting(true)
  const {storageRef, sharedState} = props
  const {setFile} = sharedState
  await storageRef.delete()
  setIsDeleting(false)
  setFile(null)
}

function verifyFile({props}) {
  const {setFile, storageRef} = props
  storageRef.getDownloadURL().catch((err)=> {
    if (err.code === 'storage/object-not-found') setFile(null)
  })
}

function componentDidMount({props}) {
  verifyFile({props})
}

export default function useFileLinkWithDeleteButton({props}) {
  const {file, setFile} = props.sharedState
  const [isDeleting, setIsDeleting] = React.useState(false)
  React.useEffect(componentDidMount.bind(null, {props}), [])
  return {
    deleteFile: deleteFile.bind(null, {props, setIsDeleting}),
    file,
    isDeleting,
  }
}
