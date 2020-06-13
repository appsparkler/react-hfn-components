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
  return (
    <FirebaseSuperCroppie storageRef={storageRef} />
  )
}
