import React from 'react'

function handleInput({props, states}) {

}

export default function useFileInput({props}) {
  const [validationError, setValidationError] = React.useState('')
  const states = {
    validationError, setValidationError,
  }
  return {
    handleInput: handleInput.bind(null, {props, states}),
    validationError,
  }
}
