import React from 'react'
import {FileInputV2} from '@appsparkler/react-hfn-components'

export default () => {
  const keydx = 'xyz'
  const params = {
    // input-attributes
    type: 'file',
    multiple: true,
    className: 'my-special-input-field',

    // Other upload information
    path: '/abhyasiDaya/INAAAB998',

    // Validations
    maxBytes: 50000,
    maxFiles: 5,
    allowedFileTypes: ['png', 'jpg', 'pdf'],
  }
  return (<FileInputV2 key={keydx} {...params} />)
}
