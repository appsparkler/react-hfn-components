import React from 'react'
import {
  Stack, DefaultButton, mergeStyleSets, getTheme,
} from 'office-ui-fabric-react'

export const CroppiePlaceholder = ({}) => (
  <Stack horizontalAlign="center" tokens={tokens}>
    <div
      className={contentStyles.croppiePlaceholderStyles}>
      Croppie Placeholder
    </div>
    <DefaultButton text="Upload Photo" />
  </Stack>
)

const tokens = {
  childrenGap: 20,
}
const theme = getTheme()
const contentStyles =mergeStyleSets({

  croppiePlaceholderStyles: [
    theme.fonts.medium, {
      outline: '1px blue solid',
      width: '350px',
      height: '200px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }],
})
