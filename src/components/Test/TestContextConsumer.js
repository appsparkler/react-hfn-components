import React from 'react'
import PropTypes from 'prop-types'
import {TestContext} from './TestContext'

const TestContextConsumer = ({initialCount}) => {
  const {count, addToCount} = React.useContext(TestContext)
  const handleClick = () => {
    addToCount()
  }
  return (
    <div>
      <pre>{count}</pre>
      <button type="button" onClick={handleClick}>Add 2 Count!</button>
    </div>
  )
}

TestContextConsumer.propTypes = {
  initialCount: PropTypes.number,
}

export default TestContextConsumer
