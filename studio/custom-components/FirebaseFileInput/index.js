import React from 'react'
import PropTypes from 'prop-types'
import useFileInput from '@react-hfn-hooks/useFileInput'

const FirebaseFileInput = ({storageRef}) => {
  const [file, setFile] = React.useState(null)
  const {handleFileInputChange} = useFileInput({setFile})
  return (
    <div>
      <input type="file" onChange={handleFileInputChange} />
      <pre>{file && file.name}</pre>
    </div>
  )
}

FirebaseFileInput.propTypes = {
  storageRef: PropTypes.object.isRequired,
}

export default FirebaseFileInput
