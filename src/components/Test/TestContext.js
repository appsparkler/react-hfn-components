import React from 'react'
import PropTypes from 'prop-types'

export const TestContext = React.createContext()

const TestContextProvider = ({children, initialCount}) => {
  const [count, setCount] = React.useState(initialCount)
  const addToCount = () => {
    setCount(count + 1)
  }
  const setInitialCount = (initialCount) => {
    setCount(initialCount)
  }
  return (
    <TestContext.Provider
      value={{count, addToCount, setInitialCount}}
    >
      {children}
    </TestContext.Provider>
  )
}

TestContextProvider.propTypes = {
  initialCount: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default TestContextProvider
