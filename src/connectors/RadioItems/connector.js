import React from 'react'
import PropTypes from 'prop-types'

const connectorFactory = ({Component, config, Context, ContextProvider}) => {
  const ComponentWithContext = () => {
    const ctx = React.useContext(Context)
    return (<Component {...ctx} />)
  }
  return (<ContextProvider {...config}>
    {Component ? <ComponentWithContext /> : (
      <pre>Please add a custom component</pre>
    )}
  </ContextProvider>)
}

connectorFactory.propTypes = {
  Component: PropTypes.func.isRequired,
  Context: PropTypes.object.isRequired,
  ContextProvider: PropTypes.func.isRequired,
  config: PropTypes.object,
}

connectorFactory.defaultProps = {
  config: {},
}

export default connectorFactory
