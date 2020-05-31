import React from 'react'

export default {
  title: 'Embedded Forms.Example',
}

export const Sample = () => {
  return (
    <div className="embedded-form-wrapper">
      <iframe
        style={{width: '100vw', height: '100vh'}}
        src="https://reg.heartfulness.org/#/form/security1"
      ></iframe>
    </div>
  )
}
