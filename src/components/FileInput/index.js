import React from 'react'

function FileInput(props) {
  const {handleInput} = useFileInput({props})
  return (
    <div>
      <input type="file" onInput={handleInput}/>
    </div>
  )
}

export default FileInput
