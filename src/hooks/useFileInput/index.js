import React from 'react'
import uuid from 'uuid/v1'

function resetInputFiled({props, states}, evt) {
  const {setFileType} = states
  setFileType('')
}

function validateFileSize({props, states}, evt) {
  const {maxBytes, maxBytesError} = props
  const {setValidationError} = states
  const {files} = evt.target
  const payloadSize = [...files].reduce((r, file) => r+file.size, 0)
  if (payloadSize > maxBytes) {
    setValidationError(maxBytesError)
    resetInputFiled({props, states}, evt)
    return false
  } else {
    setValidationError('')
    return true
  }
}

function upload({props, states}, evt) {
  const {files} = evt.target
  const {storageRef} = props
  const {setUploadDetails} = states
  const files2Upload = [...files]
  setUploadDetails(
      files2Upload.map((file) => ({
        key: uuid(),
        uploadTask: storageRef.child(file.name).put(file),
        file,
      })),
  )
}

function uploadFiles({props, states}, evt) {
  const withinFileLimit = validateFileSize({props, states}, evt)
  if (withinFileLimit) upload({props, states}, evt)
}

const DEFAULT_PROPS = {
  // Input attributes
  type: 'file',
  name: 'file',
  required: true,
  disabled: false,
  readOnly: false,
  //
  maxBytes: 5 * 1024 * 1024, // 5 MB (TODO: add server side validation)
  maxBytesError: 'File exceeds upload limit',
}

function fileTypeDidChange({states}) {
  const {setFileType} = states
  setFileType('file')
}

function uploadDetailsDidChange({props, states}) {
  const {onUpload} = props
  onUpload && onUpload({props, states})
}

export default function useFileInput({props}) {
  props = Object.assign(DEFAULT_PROPS, props)

  // States
  const [validationError, setValidationError] = React.useState('')
  const [fileType, setFileType] = React.useState(props.type)
  const [uploadDetails, setUploadDetails] = React.useState([])
  const states = {
    validationError, setValidationError,
    uploadDetails, setUploadDetails,
    setFileType,
  }

  // Effects
  React.useEffect(fileTypeDidChange.bind(null, {states}), [fileType])
  React.useEffect(
      uploadDetailsDidChange.bind(null, {props, states}), [uploadDetails],
  )

  const inputAttrs = {
    type: fileType,
    className: props.className,
    name: props.name,
    required: props.required,
    disabled: props.disabled,
    readOnly: props.readOnly,
  }
  return {
    inputAttrs,
    uploadFiles: uploadFiles.bind(null, {props, states}),
    validationError,
    maxBytes: props.maxBytes,
    uploadDetails,
    label: props.label,
  }
}
