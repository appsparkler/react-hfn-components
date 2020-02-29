import React from 'react'
import PropTypes from 'prop-types'

const FirebaseFileInput = (props) => {
  return (
    <div>
      {props.readOnly && <h2>ReadOnly Version</h2>}
      {!props.readOnly && <h2>Editable Version</h2>}
    </div>
  )
}

FirebaseFileInput.propTypes = {
  readOnly: PropTypes.bool.isRequired,
}

export default FirebaseFileInput
