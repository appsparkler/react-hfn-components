import React from 'react'
import PropTypes from 'prop-types'

export const FileInputContext = React.createContext()

const FileInputContextProvider = ({children}) => {
  return (
    <FileInputContext.Provider>
      {children}
    </FileInputContext.Provider>
  )
}

FileInputContextProvider.propTypes = {
  children: PropTypes.any,
}

export default FileInputContextProvider
