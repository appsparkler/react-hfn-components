import React from 'react'
import config from './config'
import connectFirebaseSuperCroppie from './connectFirebaseSuperCroppie'

const FirebaseSuperCroppie = () => {
  return (
    <div>
      Firebase Super Croppie
    </div>
  )
}

export default connectFirebaseSuperCroppie({
  Component: FirebaseSuperCroppie,
  config: config,
})
