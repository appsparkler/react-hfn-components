import React from 'react'
import PropTypes from 'prop-types'
import useContextProvider from './useContextProvider'

export const Context = React.createContext()

const ContextProvider = ({children, storageRef}) => {
  const {isUploading, uploaded} = useContextProvider({storageRef})
  return (
    <Context.Provider value={{isUploading, uploaded}}>
      {children}
    </Context.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.object,
  storageRef: PropTypes.object.isRequired,
}

export default ContextProvider
