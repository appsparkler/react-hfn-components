import React from 'react'
import useFileInput from './useFileInput'

function FileInput(props) {
  const {label} = props
  const {handleInput} = useFileInput({props})
  return (
    <div>
      <label >
        // {label}
        <br />
        <input type="file" onInput={handleInput}/>
      </label>
    </div>
  )
}

export default FileInput
