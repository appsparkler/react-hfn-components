import React from 'react'

function resetInputFiled({props, states}) {
  const {setType} = states
  setType('')
}

function validateFileSize({props, states}, evt) {
  const {maxBytes, maxBytesError} = props
  const {setValidationError} = states
  const file = evt.target.files.item(0)
  // const file = files.get
  const fileSize = file.size
  if (fileSize > maxBytes) {
    setValidationError(maxBytesError)
    resetInputFiled({props, states})
    return false
  } else {
    setValidationError('')
    return true
  }
}

function fileTypeDidChange({states}) {
  const {setType, type} = states
  if (type !== 'file') setType('file')
}

function handleInput({props, states}, evt) {
  const withinFileLimit = validateFileSize({props, states}, evt)
  // if (withinFileLimit) upload({props, states}, evt)
}

export default function useFileInput({props}) {
  const DEFAULT_PROPS = {
    type: 'file',
    maxBytes: 5 * 1024 *1024,
    maxBytesError: 'File size limit exceeded!',
  }
  props = Object.assign(DEFAULT_PROPS, props)
  const [validationError, setValidationError] = React.useState('')
  const [type, setType] = React.useState(props.file)
  const states = {
    validationError, setValidationError,
    type, setType,
  }

  // EFFECTS
  React.useEffect(fileTypeDidChange.bind(null, {states}), [type])

  return {
    handleInput: handleInput.bind(null, {props, states}),
    type,
    validationError,
    maxBytes: props.maxBytes,
  }
}
