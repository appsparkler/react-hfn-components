import React from 'react'

export default ({uploadDetail}) => {
  const [progress, setProgress] = React.useState(0)
  uploadDetail.uploadTask.on(
      'state_changed',
      ({bytesTransferred, totalBytes}) => {
        const progress = (bytesTransferred/totalBytes) * 100
        if (totalBytes !== 0) setProgress(progress)
      },
      (err) => {
        console.error(err)
      },
      () => {
        setProgress(100)
      },
  )
  return (
    <div className="progress">
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{width: `${progress}%`}}
      >
        <span className="sr-only">{progress}% Complete</span>
      </div>
    </div>
  )
}
