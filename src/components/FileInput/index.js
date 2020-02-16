import React from 'react'

function useFileInput({props}) {
  const {setFile} = props
  const handleInput = (evt) => {
    const file = evt.target.files.item(0)
    setFile(file)
  }
  return {
    handleInput,
  }
}

function FileInput(props) {
  const {handleInput} = useFileInput({props})
  return (
    <div>
      <input type="file" onInput={handleInput}/>
    </div>
  )
}

export default FileInput
