import React from 'react'
import {
  Stack, Link, DefaultButton, MessageBar,
} from 'office-ui-fabric-react'
import './styles'

const StudioApp = () => {
  return (
    <Stack horizontal wrap horizontalAlign="center" gap="10">
      <Stack.Item align="center">
        <Stack maxWidth={200} maxHeight={50}>
          {/* <Stack.Item>
            <Link href="google.com" style={{
              width: '200px',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              outline: '1px blue solid',
              display: 'inline-block',
            }}>
              File Link LinkLinkLinkLinkLinkLinkLinkLinkLinkLink
            </Link>
          </Stack.Item>*/}
          <Stack.Item maxWidth={200} maxHeight={50}>
            <MessageBar>File not uploaded...</MessageBar>
          </Stack.Item>
        </Stack>
      </Stack.Item>
      <Stack.Item align="end">
        <DefaultButton primary text="Edit"/>
      </Stack.Item>
    </Stack>
  )
}

export default StudioApp
