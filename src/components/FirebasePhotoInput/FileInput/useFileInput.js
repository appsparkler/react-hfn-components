import React from 'react'

// if (this.files && this.files[0]) {
//   const myFile = this.files[0]
//   const reader = new FileReader()
//
//   reader.addEventListener('load', function(e) {
//     output.textContent = e.target.result
//     debugger
//   })
//
//   reader.readAsBinaryString(myFile)
// }

function handleFileLoaded({props}, evt) {
  const result = evt.target.result
  const {setSelectedFile} = props
  setSelectedFile(result)
}

function handleChange({props}, evt) {
  const {files} = evt.target
  const photo = files.item(0)
  const reader = new FileReader()
  reader.addEventListener('load', handleFileLoaded.bind(null, {props}))
  reader.readAsDataURL(photo)
}

export default ({props}) => {
  return {
    handleChange: handleChange.bind(null, {props}),
  }
}
