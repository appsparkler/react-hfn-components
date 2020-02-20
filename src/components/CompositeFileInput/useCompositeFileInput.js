import React from 'react'

export default ({props}) => {
  const [isUploading, setIsUploading] = React.useState(false)
  return {
    ...props,
    isUploading, setIsUploading,
  }
}
