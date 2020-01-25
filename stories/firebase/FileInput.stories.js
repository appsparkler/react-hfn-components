import React from 'react'
import FirebaseApp from './setup'
import FileInput from '@components/FileInput'

export default {
  title: 'Firebase File Input',
}

export const defaultFileInput = () => {
  const config = {FirebaseApp}
  return (
    <form>
      <FileInput config={config} />
    </form>
  )
}
