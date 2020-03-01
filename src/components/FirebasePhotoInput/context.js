import React from 'react'
import PropTypes from 'prop-types'

export const Context = React.createContext()


const ContextProvider = ({children}) => {
  const value = {}
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default ContextProvider
