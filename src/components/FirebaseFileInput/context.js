import React from 'react'
import PropTypes from 'prop-types'
import useFirebaseFileInput from './useFirebaseFileInput'
import useFirebaseFileLink
  from '@react-hfn-components/FirebaseFileLink/useFileLink'

const FirebaseFileInputContext = React.createContext()

const FirebaseFileInputContextProvider = ({children,
  maxBytes, storageRef}) => {
  const value = useFirebaseFileInput({maxBytes, storageRef})
  const {file, isVerifying} = useFirebaseFileLink({storageRef})
  return (
    <FirebaseFileInputContext.Provider
      value={{...value, file, isVerifying}}
    >
      {children}
    </FirebaseFileInputContext.Provider>
  )
}

FirebaseFileInputContextProvider.propTypes = {
  children: PropTypes.any.isRequired,
  storageRef: PropTypes.object.isRequired,
  //
  maxBytes: PropTypes.number,
}

FirebaseFileInputContextProvider.defaultProps = {
  maxBytes: 5 * 1024 * 1024,
}

export const connectFirebaseFileInput = (Component, config) => () => {
  const ComponentWithContext = () => {
    const context = React.useContext(FirebaseFileInputContext)
    return (<Component {...context} />)
  }
  return (
    <FirebaseFileInputContextProvider {...config}>
      { Component ? <ComponentWithContext /> : (
        <pre>Please pass a custom component to the connector.</pre>
      )}
    </FirebaseFileInputContextProvider>
  )
}
