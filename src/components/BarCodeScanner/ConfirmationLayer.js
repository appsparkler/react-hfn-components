import React from 'react'
import {
  Layer, MessageBar, MessageBarButton,
  MessageBarType,
} from 'office-ui-fabric-react'

const ConfirmationLayer = ({}) => (
  <Layer>
    <MessageBar
      actions={
        <div>
          <MessageBarButton>Yes</MessageBarButton>
          <MessageBarButton>No</MessageBarButton>
        </div>
      }
      messageBarType={MessageBarType.success}
      isMultiline={false}
    >
        Scanned Output: INAAAE478
    </MessageBar>
  </Layer>
)

export default ConfirmationLayer
