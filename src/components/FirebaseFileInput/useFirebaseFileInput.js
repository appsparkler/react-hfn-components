import React from 'react'

export default (props) => {
  const [file, setFile] = React.useState(null)
  return {
    ...props,
    file,
    setFile,
  }
}
