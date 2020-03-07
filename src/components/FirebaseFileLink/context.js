import React from 'react'
import PropTypes from 'prop-types'
import useFileLink from './useFileLink'

export const FirebaseFileLinkContext = React.createContext()

const FirebaseFileLinkContextProvider = ({children, storageRef}) => {
  const value = useFileLink({storageRef})
  return (
    <FirebaseFileLinkContext.Provider value={value}>
      {children}
    </FirebaseFileLinkContext.Provider>
  )
}

FirebaseFileLinkContextProvider.propTypes = {
  children: PropTypes.any.isRequired,
  storageRef: PropTypes.object,
}

export const connectFirebaseFileLink = (CustomComponent, config) => () => {
  const ComponentWithContext = () => {
    const context = React.useContext(FirebaseFileLinkContext)
    return (<CustomComponent {...context}/>)
  }
  return (
    <FirebaseFileLinkContextProvider {...config}>
      {
        CustomComponent ?
        (<ComponentWithContext />) :
        <pre>
          please add a custom component
        </pre>
      }
    </FirebaseFileLinkContextProvider>
  )
}
