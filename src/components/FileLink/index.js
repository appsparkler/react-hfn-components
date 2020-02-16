import React from 'react'

function FileLink(props) {
  const {file} = props
  const {downloadURL, fileName} = file
  return (<a href={downloadURL}>{fileName}</a>)
}

export default FileLink
