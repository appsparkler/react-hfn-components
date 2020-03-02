import React from 'react'
import PropTypes from 'prop-types'
import Croppie from 'croppie'
import {dataURItoBlob} from './utils'

export const FirebasePhotoInputContext = React.createContext()

function handleFileLoaded({setSelectedFile}, evt) {
  evt.preventDefault()
  evt.stopPropagation()
  const result = evt.target.result
  setSelectedFile(result)
}

function handleChange({setSelectedFile}, evt) {
  evt.preventDefault()
  evt.stopPropagation()
  const {files} = evt.target
  const photo = files.item(0)
  if (photo) {
    const reader = new FileReader()
    reader.addEventListener(
        'load',
        handleFileLoaded.bind(null, {setSelectedFile}),
    )
    reader.readAsDataURL(photo)
  }
}

async function setDownloadURLOnState({value}) {
  try {
    const downloadURL = await value.storageRef.getDownloadURL()
    value.setDownloadURL(downloadURL)
  } catch (e) {
  }
}

function componentDidMount({value}) {
  setDownloadURLOnState({value})
}

function handleStateChange({props}, snapshot) {
  if (snapshot.totalBytes) {
    props.setProgress((snapshot.bytesTransferred/snapshot.totalBytes) * 100)
  }
}

function handleError() {

}

async function handleDone({props, task}) {
  setTimeout(() => {
    props.setProgress(100)
    props.setIsUploading(false)
    props.setUploaded(true)
  }, 1000)
  await task
  const downloadURL = await task.snapshot.ref.getDownloadURL()
  const {
    fullPath,
    contentType,
    name,
    size,
    timeCreated,
    updated,
  } = task.snapshot.metadata
  const payload = {
    downloadURL,
    fullPath,
    contentType,
    fileName: name,
    size,
    timeCreated,
    updated,
  }
  props.onUpload(payload)
  props.setDownloadURL(downloadURL)
}

async function uploadPhoto({value: props}, evt) {
  evt.preventDefault()
  evt.stopPropagation()
  props.setProgress(0)
  props.setIsUploading(true)
  props.setUploaded(false)
  const {storageRef, file2Upload} = props
  const task = storageRef.put(file2Upload)
  task.on(
      'state_changed',
      handleStateChange.bind(null, {props}),
      handleError,
      handleDone.bind(null, {props, task}),
  )
}

function selectedFileDidChange({value}) {
  const {
    selectedFile,
    croppieConfig,
    croppieRef,
    setCroppie,
    croppie,
  } = value
  if (selectedFile && !croppie) {
    const config = {
      ...croppieConfig,
      url: selectedFile,
    }
    const newCroppie = new Croppie(croppieRef.current, config)
    setCroppie(newCroppie)
  } else if (selectedFile && croppie) {
    croppie.bind({
      url: selectedFile,
    })
  }
}

async function handleCroppieUpdates({value: props}, evt) {
  const {croppie, photoPreviewRef, maxBytes} = props
  if (croppie) {
    const croppedImg = await croppie.result()
    photoPreviewRef.current.src = croppedImg
    const blob = dataURItoBlob(croppedImg)
    const fileToUpload = new File([blob], 'photo')
    if (croppedImg?.length > maxBytes) {
      props.setExceedsMaxBytes(true)
    } else {
      props.setExceedsMaxBytes(false)
      props.setFile2Upload(fileToUpload)
    }
  }
}

function croppieDidChange({value}) {
  const {croppie} = value
  if (croppie?.element) {
    croppie.element.addEventListener(
        'update',
        handleCroppieUpdates.bind(null, {value}),
    )
  }
}

const FirebasePhotoInputContextProvider = ({children, ...props}) => {
  const {croppieConfig} = props
  const [selectedFile, setSelectedFile] = React.useState(null)
  const [croppie, setCroppie] = React.useState(null)
  const [exceedsMaxBytes, setExceedsMaxBytes] = React.useState(null)
  const [file2Upload, setFile2Upload] = React.useState(null)
  const [uploaded, setUploaded] = React.useState(false)
  const [isUploading, setIsUploading] = React.useState(false)
  const [downloadURL, setDownloadURL] = React.useState('')
  const [progress, setProgress] = React.useState(0)
  const photoPreviewRef = React.useRef()
  const croppieRef = React.useRef()
  const value = {
    // PROPS
    croppieConfig,
    ...props,
    // REFS
    photoPreviewRef, croppieRef,

    // STATES
    downloadURL, setDownloadURL,
    uploaded, setUploaded,
    progress, setProgress,
    isUploading, setIsUploading,
    selectedFile, setSelectedFile,
    croppie, setCroppie,
    exceedsMaxBytes, setExceedsMaxBytes,
    file2Upload, setFile2Upload,

    // methods
    handleChange: handleChange.bind(null, {setSelectedFile}),
  }
  value.uploadPhoto = uploadPhoto.bind(null, {value})
  React.useEffect(componentDidMount.bind(null, {value}), [])
  React.useEffect(
      selectedFileDidChange.bind(null, {value}),
      [selectedFile],
  )
  React.useEffect(
      croppieDidChange.bind(null, {value}),
      [croppie],
  )
  return (
    <FirebasePhotoInputContext.Provider value={value}>
      {children}
    </FirebasePhotoInputContext.Provider>
  )
}

FirebasePhotoInputContextProvider.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  croppieConfig: PropTypes.object,
}

FirebasePhotoInputContextProvider.defaultProps = {
  onUpload: () => null,
  maxBytes: 3 * 1024 * 1024,
  croppieConfig: {
    viewport: {width: 200, height: 200},
    boundary: {width: 300, height: 300},
  },
}

export default FirebasePhotoInputContextProvider
