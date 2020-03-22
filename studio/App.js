import React from 'react'
import FirebaseFileLink from '@react-hfn-components/FirebaseFileLink'
import config from './config'
import './styles'

const StudioApp = () => {
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
          <FirebaseFileLink {...config} />
        </div>
      </div>
    </div>
  )
}

export default StudioApp
