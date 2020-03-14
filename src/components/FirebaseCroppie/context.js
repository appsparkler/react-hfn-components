import React from 'react'
import PropTypes from 'prop-types'
import useFirebaseCroppie from './useFirebaseCroppie'

export const FirebaseCroppieContext = React.createContext()

const FirebaseCroppieContextProvider = ({children, ...props}) => {
  const contextProps = useFirebaseCroppie({props})
  return (
    <FirebaseCroppieContext.Provider value={contextProps}>
      {children}
    </FirebaseCroppieContext.Provider>
  )
}

FirebaseCroppieContextProvider.propTypes = {
  children: PropTypes.any.isRequired,
  croppieConfig: PropTypes.object.isRequired,
  storageRef: PropTypes.object.isRequired,
}

FirebaseCroppieContextProvider.defaultProps = {
  onUpload: () => null,
  maxBytes: 3 * 1024 * 1024,
  croppieConfig: {
    viewport: {width: 200, height: 200},
    boundary: {width: 300, height: 300},
  },
}

export default FirebaseCroppieContextProvider

export const connectFirebaseCroppie = (Component, config) => () => {
  const ComponentWithContext = () => {
    const context = React.useContext(FirebaseCroppieContext)
    return (<Component {...context} />)
  }

  return ( <FirebaseCroppieContextProvider {...config}>
    {Component ? <ComponentWithContext /> : (
      <pre>Please add a custom component</pre>
    )}
  </FirebaseCroppieContextProvider>)
}
