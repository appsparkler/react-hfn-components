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

export const connectFirebaseFileInput = (Component, config) => () => {
  const ComponentWithContext = () => {
    const context = React.useContext(FirebaseFileInputContext)
    return (<Component {...context} />)
  }

  return (
    <FirebaseFileInputContextProvider>
      { Component ? <ComponentWithContext /> : (
        <pre>Please pass a custom component to the connector.</pre>
      )}
    </FirebaseFileInputContextProvider>
  )
}
