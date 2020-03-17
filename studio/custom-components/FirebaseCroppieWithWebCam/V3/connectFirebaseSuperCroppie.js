import React from 'react'
import PropTypes from 'prop-types'
import connector from './connector'

const FirebaseSuperCroppieContext = React.createContext()

const FirebaseSuperCroppieContextProvider = ({children}) => {
  return (
    <FirebaseSuperCroppieContext.Provider>
      {children}
    </FirebaseSuperCroppieContext.Provider>
  )
}

FirebaseSuperCroppieContextProvider.propTypes = {
  children: PropTypes.any,
}

export default connector({
  Provider: FirebaseSuperCroppieContextProvider,
  Context: FirebaseSuperCroppieContext,
})
