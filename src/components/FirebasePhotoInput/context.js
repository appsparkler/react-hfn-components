import React from 'react'
import PropTypes from 'prop-types'

export const Context = React.createContext()

const ContextProvider = ({children, ...props}) => {
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
  }
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

ContextProvider.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  croppieConfig: PropTypes.object,
}

ContextProvider.defaultProps = {
  onUpload: () => null,
  maxBytes: 3 * 1024 * 1024,
  croppieConfig: {
    viewport: {width: 200, height: 200},
    boundary: {width: 300, height: 300},
  },
}

export default ContextProvider
