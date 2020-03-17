import React from 'react'
import PropTypes from 'prop-types'
import useContextProvider from './useContextProvider'

export const MediaSourceContext = React.createContext()

const Provider = ({children, name, items}) => {
  const value= useContextProvider({name, items})
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

export const connectMediaSourceForm = (Component, config) => () => {
  const ComponentWithContext = () => {
    const context = React.useContext(MediaSourceContext)
    return (<Component {...context} />)
  }
  return (<Provider {...config}>
    {Component ? <ComponentWithContext /> : (
      <pre>Please add a custom component</pre>
    )}
  </Provider>)
}
