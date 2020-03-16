import React from 'react'
import PropTypes from 'prop-types'
import useContextProvider from './useContextProvider'

export const MediaSourceContext = React.createContext()

const Provider = ({children}) => {
  const value= useContextProvider()
  return (
    <MediaSourceContext.Provider value={value}>
      {children}
    </MediaSourceContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.any,
}

export default Provider
