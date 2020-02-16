import React from 'react'

export function useFileInput({props}) {
  const {setFile} = props
  const handleInput = (evt) => {
    const file = evt.target.files.item(0)
    setFile(file)
  }
  return {
    handleInput,
  }
}
