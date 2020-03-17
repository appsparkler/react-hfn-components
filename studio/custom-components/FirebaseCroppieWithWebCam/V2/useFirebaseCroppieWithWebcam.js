// import React from 'react'
import useRadioItems from '@react-hfn-connectors/RadioItems/use'

// function handleMediaSourceChange({
//   setUploaded, setMediaSource, setDataURL, setCroppedDataURL,
// }, mediaSource) {
//   setMediaSource(mediaSource)
//   setUploaded(false)
//   setDataURL(null)
//   setCroppedDataURL(null)
// }
//
// function handleUploadProgress({setIsUploading}) {
//   setIsUploading(true)
// }
//
// function handleUploadDone({setIsUploading, setUploaded, setMediaSource}) {
//   setIsUploading(false)
//   setUploaded(true)
//   setMediaSource(null)
// }
//
// function handleUploadStart({setIsUploading, setUploaded}) {
//   setIsUploading(true)
//   setUploaded(false)
// }

export default () => {
  const {
    value,
    name,
    items,
    handleChange,
    resetValue,
  } = useRadioItems({
    name: 'mediaSource',
    items: [
      {label: 'Upload File', value: 'file'},
      {label: 'Use Webcam', value: 'webcam'},
    ],
  })
  // const [dataURL, setDataURL] = React.useState(null)
  // const [croppedDataURL, setCroppedDataURL] = React.useState(null)
  // const [progress, setProgress] = React.useState(0)
  // const [uploaded, setUploaded] = React.useState(false)
  // const [mediaSource, setMediaSource] = React.useState(null)
  // const [isUploading, setIsUploading] = React.useState(null)
  return {
    value,
    name,
    items,
    handleChange,
    resetValue,
    // // properties
    // dataURL, setDataURL,
    // croppedDataURL, setCroppedDataURL,
    // progress, setProgress,
    // uploaded, setUploaded,
    // mediaSource,
    // isUploading,
    // methods
    // handleMediaSourceChange: handleMediaSourceChange.bind(null, {
    //   setUploaded,
    //   setMediaSource,
    //   setDataURL,
    //   setCroppedDataURL,
    // }),
    // handleUploadProgress: handleUploadProgress.bind(null, {
    //   setIsUploading,
    // }),
    // handleUploadDone: handleUploadDone.bind(null, {
    //   setIsUploading, setUploaded, setMediaSource,
    // }),
    // handleUploadStart: handleUploadStart.bind(null, {
    //   setIsUploading, setUploaded,
    // }),
  }
}
