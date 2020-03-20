import React from 'react'

function componentDidMount({videoRef}) {
  if (!videoRef.current) return
  videoRef.current.innerHTML = `<h1>Hello World</h1>`
}


export default () => {
  const videoRef = React.useRef()
  React.useEffect(componentDidMount.bind(null, {videoRef}), [])
  return {
    videoRef,
  }
}
