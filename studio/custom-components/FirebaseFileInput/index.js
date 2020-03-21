import React from 'react'
import PropTypes from 'prop-types'
import useFileInput from '@react-hfn-hooks/useFileInput'

const FirebaseFileInput = ({storageRef}) => {
  const [dataURL, setDataURL] = React.useState(null)
  const {handleFileInputChange} = useFileInput({setDataURL})
  return (
    <div>
      <input type="file" onChange={handleFileInputChange} />
      <pre>{dataURL}</pre>
    </div>
  )
}

FirebaseFileInput.propTypes = {
  storageRef: PropTypes.object.isRequired,
}

export default FirebaseFileInput
