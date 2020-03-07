import React from 'react'
import PropTypes from 'prop-types'

const FirebaseFileInputContext = React.createContext()

const FirebaseFileInputContextProvider = ({children}) => {
  const value = {}
  return (
    <FirebaseFileInputContext.Provider value={value}>
      {children}
    </FirebaseFileInputContext.Provider>
  )
}

FirebaseFileInputContextProvider.propTypes = {
  children: PropTypes.any.isRequired,
}
