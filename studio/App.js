import React from 'react'
import {FileInputV2} from '@appsparkler/react-hfn-components'

export default () => {
  const keydx = 'xyz'
  const params = {
    type: 'file',
    multiple: true,
    path: '/abhyasiDaya/INAAAB998',
    maxBytes: 50000,
    maxFiles: 5,
    className: 'my-special-input-field',
  }
  return <FileInputV2 key={keydx} {...params} />
}
