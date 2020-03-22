
function onStateChange({setProgress}, snapshot) {
  const {state, totalBytes, bytesTransferred} = snapshot
  if (totalBytes && state === 'running') {
    const progress = (bytesTransferred/totalBytes) * 100
    setProgress(progress)
  }
}

function onError({setError}) {
  setError(new Error('Did not upload!'))
}

function onDoneCallback({setProgress, setUploaded, setIsUploading}) {
  setUploaded(true)
  setIsUploading(false)
}

function uploadFile({
  file, storageRef,
  setProgress, setError, setIsUploading,
  setUploaded,
}) {
  const uploadTask = storageRef.put(file, {
    customMetadata: {
      fileName: file.name,
    },
  })
  uploadTask.on(
      'state_changed',
      onStateChange.bind(null, {setProgress}),
      onError.bind(null, {setError}),
      onDoneCallback.bind(null, {
        setProgress, setUploaded, setIsUploading,
      }),
  )
}

export default ({
  file, storageRef, setProgress, setError, setIsUploading,
  setUploaded,
}) => {
  return {
    uploadFile: uploadFile.bind(null, {
      file, storageRef, setProgress, setError, setIsUploading,
      setUploaded,
    }),
  }
}
