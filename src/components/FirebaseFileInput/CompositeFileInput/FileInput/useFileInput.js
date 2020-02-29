import React from 'react'

function resetInputFiled({props, states}) {
  const {setType, type} = states
  if (type !== 'file') setType('file')
}

function typeDidChange({props, states}) {
  states.setType('file')
}

function validateFileSize({props, states}, evt) {
  const {maxBytes, maxBytesError} = props
  const {setMaxBytesExceeded} = states
  const file = evt.target.files.item(0)
  if (file.size > maxBytes) {
    setMaxBytesExceeded(maxBytesError)
    resetInputFiled({props, states})
    return false
  } else {
    setMaxBytesExceeded(null)
    return true
  }
}

async function handleInput({props, states}, evt) {
  const withinFileLimit = validateFileSize({props, states}, evt)
  if (withinFileLimit) await upload({props}, evt)
}

export default (props) => {
  const [maxBytesExceeded, setMaxBytesExceeded] = React.useState(false)
  const [type, setType] = React.useState('file')
  const states = {
    maxBytesExceeded, setMaxBytesExceeded,
    type, setType,
  }
  React.useEffect(typeDidChange.bind(null, {props, states}), [type])
  return {
    ...props,
    progress: 30,
    maxBytesExceeded,
    handleInput: handleInput.bind(null, {props, states}),
  }
}
