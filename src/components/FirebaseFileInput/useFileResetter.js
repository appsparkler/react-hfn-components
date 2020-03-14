import React from 'react'

function resetInputField({setType}) {
  setType('')
}

export default () => {
  const [type, setType] = React.useState('file')
  React.useEffect(() => {
    setType('file')
  }, [type])
  return {
    type,
    resetInputField: resetInputField.bind(null, {setType}),
  }
}
