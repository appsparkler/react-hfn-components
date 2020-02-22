import React from 'react'

function handleChange({props}, evt) {
  const {files} = evt.target
}

export default ({props}) => {
  return {
    handleChange: handleChange.bind(null, {props}),
  }
}
