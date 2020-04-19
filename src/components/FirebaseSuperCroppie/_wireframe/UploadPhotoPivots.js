import * as React from 'react'
import {Label} from 'office-ui-fabric-react/lib/Label'
import {
  Stack,
  Pivot, PivotItem,
} from 'office-ui-fabric-react'
import ChooseFileButton from './ChooseFileButton'

const labelStyles= {
  root: {marginTop: 10},
}

export const UploadPhotoPivots = () => {
  return (
    <Pivot aria-label="Basic Pivot Example">
      <PivotItem
        headerText="Upload File"
        headerButtonProps={{
          'data-order': 1,
          'data-title': 'My Files Title',
        }}

      >
        <Stack
          vertical
          verticalAlign="center"
          horizontalAlign="center"
          padding={30}
        >
          <ChooseFileButton />
        </Stack>
      </PivotItem>
      <PivotItem headerText="Use Webcam">
        <Label styles={labelStyles}>Webcam Stream</Label>
      </PivotItem>
      <PivotItem headerText="Crop Photo">
        <Label styles={labelStyles}>Croppie</Label>
      </PivotItem>
    </Pivot>
  )
}
