import * as React from 'react'
import {
  Stack, DefaultButton,
  Pivot, PivotItem, mergeStyleSets,
} from 'office-ui-fabric-react'
import ChooseFileButton from './ChooseFileButton'

export const UploadPhotoPivots = () => {
  return (
    <Pivot aria-label="Basic Pivot Example" defaultSelectedIndex={1}>
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
        <Stack horizontalAlign="center" tokens={{
          childrenGap: 20,
        }}>
          <div className={contentStyles.videoPlaceholderStyles}>
            Video Placeholder
          </div>
          <DefaultButton text="Take Snapshot" />
        </Stack>
      </PivotItem>
    </Pivot>
  )
}

const contentStyles = mergeStyleSets({
  videoPlaceholderStyles: {
    width: '300px',
    height: '300px',
    outline: '1px slateBlue solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
