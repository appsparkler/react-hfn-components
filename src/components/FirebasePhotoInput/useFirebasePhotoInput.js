import React from 'react'

export default ({props}) => {
  const [selectedFile, setSelectedFile] = React.useState(null)
  return {
    ...props,
    selectedFile, setSelectedFile,
  }
}
