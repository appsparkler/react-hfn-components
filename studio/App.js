import React from 'react'
import {FileInputV2} from '@appsparkler/react-hfn-components'

export default () => {
  const keydx = 'xyz'
  const params = {
    type: 'file',
    multiple: true,
    path: '/abhyasiDaya/INAAAB998',
    className: 'my-special-input-field',

    maxBytes: 50000,
    maxFiles: 5,
    allowedFileTypes: ['png', 'jpg', 'pdf'],
  }
  return (<FileInputV2 key={keydx} {...params} />)
}
