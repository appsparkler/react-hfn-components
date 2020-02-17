import React from 'react'

function FileLink(props) {
  const {file} = props
  const {downloadUrl, fileName} = file
  return (
    <div className="FileLink">
      <a href={downloadUrl} target="__blank">
        {fileName}
      </a>
    </div>
  )
}

export default FileLink
