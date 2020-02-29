import React from 'react'
import PropTypes from 'prop-types'
import CompositeFileInput from './CompositeFileInput'

const FirebaseFileInput = (props) => {
  return (
    <div>
      {props.readOnly && <h2>ReadOnly Version</h2>}
      {!props.readOnly && <CompositeFileInput/>}
    </div>
  )
}

FirebaseFileInput.propTypes = {
  readOnly: PropTypes.bool.isRequired,
}

export default FirebaseFileInput
