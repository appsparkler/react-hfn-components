import React from 'react'
import {Spinner, SpinnerSize} from 'office-ui-fabric-react'
import './styles'

const StudioApp = () => {
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
          <span><Spinner size={SpinnerSize.large} /></span>
        </div>
        <div className="ms-Grid-col ms-sm6 ms-md8 ms-lg10">B</div>
      </div>
    </div>
  )
}

export default StudioApp
