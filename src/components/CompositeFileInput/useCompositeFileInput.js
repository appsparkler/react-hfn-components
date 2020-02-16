import React from 'react'

export default function() {
  const [file, setFile] = React.useState(null)
  const sharedState = {
    file, setFile,
  }
  return {
    sharedState,
  }
}
