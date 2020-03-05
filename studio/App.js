// import React from 'react'
import config from './config'
import {
  setupFirebasePhotoInput,
}
  from '@react-hfn-components/FirebasePhotoInput/context'
import CroppieCustomComponents from './custom-components'
import 'croppie/croppie.css'
import './styles.sass'

// const StudioApp = () => {
//   return (
//     <div>
//       <FirebasePhotoInputContextProvider {...config}>
//         <CroppieCustomComponents />
//       </FirebasePhotoInputContextProvider>
//     </div>
//   )
// }

export default
setupFirebasePhotoInput(CroppieCustomComponents, config)
