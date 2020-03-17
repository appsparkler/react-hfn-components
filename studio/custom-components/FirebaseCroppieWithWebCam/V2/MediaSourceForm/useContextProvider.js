import React from 'react'

function handleChange({
  setValue,
}, evt) {
  setValue(evt.target.value)
}

function resetValue({setValue}) {
  setValue(null)
}

export default ({name, items}) => {
  const [value, setValue] = React.useState(null)
  return {
    value,
    name, items,
    handleChange: handleChange
        .bind(null, {setValue}),
    resetValue: resetValue.bind(null, {setValue}),
  }
}
