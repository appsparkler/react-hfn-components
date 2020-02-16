import React from 'react'
import useFileInput from './useFileInput'

function FileInput(props) {
  const {handleInput, validationError, maxBytes, type} = useFileInput({props})
  return (
    <div>
      <label >
        <br />
        <input
          type={type}
          disabled={props.disabled || false}
          name={props.name || 'file'}
          required={props.required || false}
          onInput={handleInput}
        />
      </label>
      <p className="info">
        Max file size: {(maxBytes/(1024 * 1024)).toFixed(2)} MB
      </p>
      <p className="validation-error">{validationError}</p>
    </div>
  )
}

export default FileInput
