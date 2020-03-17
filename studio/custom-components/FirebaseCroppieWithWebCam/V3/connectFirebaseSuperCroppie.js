import React from 'react'
import PropTypes from 'prop-types'
import connector from './connector'
import useFirebaseSuperCroppie from './useFirebaseSuperCroppie'

const FirebaseSuperCroppieContext = React.createContext()

const FirebaseSuperCroppieContextProvider = ({children, storageRef}) => {
  const value = useFirebaseSuperCroppie({storageRef})
  return (
    <FirebaseSuperCroppieContext.Provider value={value}>
      {children}
    </FirebaseSuperCroppieContext.Provider>
  )
}

FirebaseSuperCroppieContextProvider.propTypes = {
  children: PropTypes.any,
  storageRef: PropTypes.object,
}

export default connector({
  Provider: FirebaseSuperCroppieContextProvider,
  Context: FirebaseSuperCroppieContext,
})
