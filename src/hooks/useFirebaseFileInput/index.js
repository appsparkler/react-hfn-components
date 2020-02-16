import React from 'react'

function useFirebaseFileInput({props}) {
  const DEFAULT_PROPS = {
    file: null,
    readOnly: true,
  }
  props = Object.assign(DEFAULT_PROPS, props)
  const [file, setFile] = React.useState(props.file)
  return {
    readOnly: props.readOnly,
    file,
    compositeFileInputProps: {
      file,
      setFile,
    },
  }
}

export default useFirebaseFileInput
