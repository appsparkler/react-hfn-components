import React from 'react'
import PropTypes from 'prop-types'
import TestContextProvider from './TestContext'
import TestContextConsumer from './TestContextConsumer'

const Test = ({initialCount}) => (
  <TestContextProvider initialCount={initialCount}>
    <div>Test Component</div>
    <TestContextConsumer />
  </TestContextProvider>
)

Test.propTypes = {
  initialCount: PropTypes.number,
}

export default Test
