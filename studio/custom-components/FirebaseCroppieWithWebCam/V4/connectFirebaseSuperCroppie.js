import React from 'react'
import PropTypes from 'prop-types'
import connector from './connector'
import useFirebaseSuperCroppie from './useFirebaseSuperCroppie'

const FirebaseSuperCroppieContext = React.createContext()

const FirebaseSuperCroppieContextProvider = ({children,
  storageRef, croppieConfig,
}) => {
  const value = useFirebaseSuperCroppie({storageRef, croppieConfig})
  return (
    <FirebaseSuperCroppieContext.Provider value={value}>
      {children}
    </FirebaseSuperCroppieContext.Provider>
  )
}

FirebaseSuperCroppieContextProvider.propTypes = {
  children: PropTypes.any,
  storageRef: PropTypes.object.isRequired,
  croppieConfig: PropTypes.object.isRequired,
}

FirebaseSuperCroppieContextProvider.defaultProps = {
  croppieConfig: {
    viewport: {width: 100, height: 100},
    boundary: {width: 300, height: 300},
  },
}

export default connector({
  Provider: FirebaseSuperCroppieContextProvider,
  Context: FirebaseSuperCroppieContext,
})
