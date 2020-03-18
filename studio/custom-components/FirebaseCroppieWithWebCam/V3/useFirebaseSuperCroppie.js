import React from 'react'
import useFileFromStorageRef from './useFileFromStorageRef'
import useFileInput from './useFileInput'
import useCroppie from './useCroppie'
import useUploadButton from './useUploadButton'
import useWebCam from './useWebCam'

function uploadedDidChange({
  setCroppedDataURL, uploaded, verifyFile,
}) {
  if (uploaded === true) {
    setCroppedDataURL(null)
    verifyFile()
  }
}
function dataURLDidChange() {

}
export default ({storageRef, croppieConfig}) => {
  const [isVerifying, setIsVerifying] = React.useState(false)
  const {file, verifyFile} = useFileFromStorageRef({
    storageRef, isVerifying, setIsVerifying,
  })
  const [dataURL, setDataURL] = React.useState()
  const {handleChange} = useFileInput({dataURL, setDataURL})
  const {
    videoRef,
    clickPhoto,
    photoButtonRef,
  } = useWebCam({dataURL, setDataURL})
  const {
    croppieRef,
    croppedDataURL,
    setCroppedDataURL,
  } = useCroppie({dataURL, croppieConfig})
  const {
    handleClick,
    isUploading,
    uploaded,
    progress,
  } = useUploadButton({croppedDataURL, storageRef})
  React.useEffect(uploadedDidChange.bind(null, {
    setCroppedDataURL, uploaded, verifyFile,
  }), [uploaded])
  React.useEffect(dataURLDidChange.bind(null, {setCroppedDataURL}), [dataURL])
  return {
    file,
    isVerifying,
    handleChange,
    croppieRef,
    croppedDataURL,
    handleClick, isUploading,
    uploaded,
    progress,
    videoRef, photoButtonRef,
    clickPhoto,
  }
}
