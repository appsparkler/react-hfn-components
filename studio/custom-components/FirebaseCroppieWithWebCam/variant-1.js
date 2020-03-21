import React from 'react'
import PropTypes from 'prop-types'
import useFirebaseSuperCroppie from '@react-hfn-hooks/useFirebaseSuperCroppie'
import FirebaseSuperCroppie from './index'

const UseFirebaseSuperCroppie= ({storageRef, croppieConfig}) => {
  const value = useFirebaseSuperCroppie({storageRef, croppieConfig})
  return <FirebaseSuperCroppie {...value}/>
}

UseFirebaseSuperCroppie.propTypes = {
  storageRef: PropTypes.object.isRequired,
  croppieConfig: PropTypes.object.isRequired,
}

UseFirebaseSuperCroppie.defaultProps = {
  croppieConfig: {
    viewport: {width: 100, height: 100},
    boundary: {width: 300, height: 300},
  },
}

export default UseFirebaseSuperCroppie
