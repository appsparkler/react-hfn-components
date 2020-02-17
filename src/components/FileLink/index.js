import React from 'react'

function FileLink(props) {
  const {file} = props.sharedState
  const {downloadUrl, fileName} = file
  return (
    <a href={downloadUrl} target="__blank">
      {fileName}
    </a>
  )
}

export default FileLink
