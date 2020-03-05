// import React from 'react'
import config from './config'
import {
  connectFirebasePhotoInput,
} from '@react-hfn-components/FirebasePhotoInput/context'
import CroppieCustomComponents from './custom-components'
import 'croppie/croppie.css'
import './styles.sass'

export default connectFirebasePhotoInput(
    CroppieCustomComponents,
    config,
)
