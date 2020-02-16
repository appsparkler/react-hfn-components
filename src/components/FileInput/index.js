import React from 'react'
import useFileInput from './useFileInput'

function FileInput(props) {
  const {handleInput} = useFileInput({props})
  return (
    <div>
      <label >
        <br />
        <input
          type="file"
          disabled={props.disabled || false}
          name={props.name || 'file'}
          required={props.required || false}
          onInput={handleInput}
        />
      </label>
    </div>
  )
}

export default FileInput
