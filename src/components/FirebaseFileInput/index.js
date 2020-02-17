import React from 'react'
import ReadOnlyFileInput from '@react-hfn-components/ReadOnlyFileInput'
import CompositeFileInput from '@react-hfn-components/CompositeFileInput'

export default (props) => {
  const {readOnly} = props
  return (
    <div className="React-HFN-FirebaseFileInput">
      {readOnly && <ReadOnlyFileInput {...props} /> }
      {!readOnly && <CompositeFileInput {...props} />}
    </div>
  )
}
