import React from 'react'
import PropTypes from 'prop-types'
import useFileLink from './useFileLink'

const Context = React.createContext()

const ContextProvider = ({children, ...props}) => {
  const value = useFileLink(props)
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.any.isRequired,
}

export const connectFirebaseFileLink = (CustomComponent, config) => () => {
  const context = React.useContext(Context)
  return (
    <ContextProvider {...config}>
      {
        CustomComponent ?
        (<CustomComponent {...context} />) :
        'Please provide a custom component'
      }
    </ContextProvider>
  )
}
