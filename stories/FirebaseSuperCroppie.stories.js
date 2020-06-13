import React from 'react'
import FirebaseSuperCroppie from '@react-hfn-components/FirebaseSuperCroppie'
import firebaseApp from './firebase/setup'

// import WireFrame from '@react-hfn-components/FirebaseSuperCroppie/_wireframe'

export default {
  title: 'Firebase Super Croppie',
}
//
// export const wireframe = () => {
//   return (
//     <WireFrame />
//   )
// }

export const example = () => {
  const storageRef = React.useMemo(() => firebaseApp
      .storage()
      .ref('hello-world')
  , [])
  const croppieConfig = React.useMemo(() => ({
    viewport: {width: 100, height: 100},
    boundary: {width: 200, height: 200},
  }), [])
  return (
    <FirebaseSuperCroppie
      storageRef={storageRef}
      croppieConfig={croppieConfig}
    />
  )
}
