import React from 'react'


function validateFileSize({props, states}, evt) {
  const {maxBytes, maxBytesError} = props
  const {setValidationError} = states
  const file = evt.target.files.item(0)
  // const file = files.get
  const fileSize = file.size
  if (fileSize > maxBytes) {
    setValidationError(maxBytesError)
    // resetInputFiled({props, states}, evt)
    return false
  } else {
    setValidationError('')
    return true
  }
}

function handleInput({props, states}, evt) {
  const withinFileLimit = validateFileSize({props, states}, evt)
  // if (withinFileLimit) upload({props, states}, evt)
}

export default function useFileInput({props}) {
  const DEFAULT_PROPS = {
    maxBytes: 5 * 1024 *1024,
    maxBytesError: 'File size limit exceeded!',
  }
  props = Object.assign(DEFAULT_PROPS, props)
  const [validationError, setValidationError] = React.useState('')
  const states = {
    validationError, setValidationError,
  }
  return {
    handleInput: handleInput.bind(null, {props, states}),
    validationError,
    maxBytes: props.maxBytes,
  }
}
