import React from 'react'
import PropTypes from 'prop-types'
import useFileLink from './useFileLink'

export const FirebaseFileLinkContext = React.createContext()

const FirebaseFileLinkContextProvider = ({children, ...props}) => {
  const value = useFileLink(props)
  return (
    <FirebaseFileLinkContext.Provider value={value}>
      {children}
    </FirebaseFileLinkContext.Provider>
  )
}

FirebaseFileLinkContextProvider.propTypes = {
  children: PropTypes.any.isRequired,
}

export const connectFirebaseFileLink = (CustomComponent, config) => () => {
  return (
    <FirebaseFileLinkContextProvider {...config}>
      {
        CustomComponent ?
        (<CustomComponent />) :
        'Please provide a custom component'
      }
    </FirebaseFileLinkContextProvider>
  )
}
