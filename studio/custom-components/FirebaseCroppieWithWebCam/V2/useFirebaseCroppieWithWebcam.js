import React from 'react'

export default () => {
  const [dataURL, setDataURL] = React.useState(null)
  return {
    dataURL, setDataURL,
  }
}
