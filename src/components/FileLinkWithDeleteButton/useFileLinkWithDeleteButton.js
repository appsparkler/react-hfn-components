import React from 'react'

const deleteFile = async ({props, setIsDeleting}) => {
  setIsDeleting(true)
  const {storageRef, setFile} = props
  await storageRef.delete()
  setIsDeleting(false)
  setFile(null)
}

export default function useFileLinkWithDeleteButton({props}) {
  const {file} = props
  const [isDeleting, setIsDeleting] = React.useState(false)

  return {
    deleteFile: deleteFile.bind(null, {props, setIsDeleting}),
    file,
    isDeleting,
  }
}
