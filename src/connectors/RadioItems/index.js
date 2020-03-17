import React from 'react'
import PropTypes from 'prop-types'
import RadioItemsContextProvider, {RadioItemsContext} from './context'

const getComponentWithContext = ({Context, Component}) => () =>{
  const context = React.useContext(Context)
  return (<Component {...context} />)
}

const ConnectedComponent = ({
  ComponentWithContext,
  Provider,
  Component,
  config,
}) => (<Provider {...config}>
  {Component ? <ComponentWithContext /> : (
    <pre>Please add a custom component</pre>
  )}
</Provider>)

ConnectedComponent.propTypes = {
  ComponentWithContext: PropTypes.func.isRequired,
  Provider: PropTypes.func.isRequired,
  Component: PropTypes.func.isRequired,
  config: PropTypes.object.isRequired,
}

const connect = ({Context, Provider}) => ({Component, config}) => () => {
  const ComponentWithContext = getComponentWithContext({
    Context, Component,
  })
  return (<ConnectedComponent
    {...{
      ComponentWithContext,
      Provider,
      Component,
      config,
    }}
  />)
}

export default connect({
  Context: RadioItemsContext, Provider: RadioItemsContextProvider,
})
