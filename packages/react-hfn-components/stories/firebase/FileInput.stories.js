import React from 'react'

export default {
  title: 'Firebase File Input',
}

export const defaultFileInput = () => (
  <form>
    <FileInput />
  </form>
)

function FileInput() {
  return (
    <input type="file" />
  )
}
