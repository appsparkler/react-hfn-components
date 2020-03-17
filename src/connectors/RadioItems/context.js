import React from 'react'
import PropTypes from 'prop-types'
import useContextProvider from './useContextProvider'

export const RadioItemsContext = React.createContext()

const RadioItemsContextProvider = ({children, name, items}) => {
  const value= useContextProvider({name, items})
  return (
    <RadioItemsContext.Provider value={value}>
      {children}
    </RadioItemsContext.Provider>
  )
}

RadioItemsContextProvider.propTypes = {
  children: PropTypes.any,
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.string,
      }).isRequired,
  ),
}

export default RadioItemsContextProvider

export const connectRadioItems = (Component, config) => () => {
  const ComponentWithContext = () => {
    const context = React.useContext(RadioItemsContext)
    return (<Component {...context} />)
  }
  return (<RadioItemsContextProvider {...config}>
    {Component ? <ComponentWithContext /> : (
      <pre>Please add a custom component</pre>
    )}
  </RadioItemsContextProvider>)
}
