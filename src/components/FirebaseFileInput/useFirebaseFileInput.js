import React from 'react'

export default ({props}) => {
  const [isVerifying, setIsVerifying] = React.useState(true)
  return {
    ...props,
    isVerifying,
    setIsVerifying,
  }
}
