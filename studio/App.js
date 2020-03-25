import React from 'react'
import FirebaseSuperCroppie from '@react-hfn-components/FirebaseSuperCroppie'
import config from './config'
// import {Stack, DefaultButton} from 'office-ui-fabric-react'
// import PreviewModal from './PreviewModal'
import './styles'

const StudioApp = () => {
  return (
    <div className="ms-Grid" dir="ltr">
      {/*  <Stack horizontal tokens={{childrenGap: '20'}}>
        <DefaultButton primary text="Upload" />
        <PreviewModal imgSrc="http://placekitten.com/120/80" />
      </Stack>*/}
      <FirebaseSuperCroppie {...config} />
    </div>
  )
}

export default StudioApp
