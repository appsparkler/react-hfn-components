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
        console.log(err)
      },
      () => {
        setProgress(100)
      },
  )
  return (
    <div className="progress-bar">
      <progress max="100" value={progress}>
        {progress && progress.toFixed(2)}%
      </progress>
      <div className="info">{(progress || 0).toFixed(2)}%</div>
    </div>
  )
}
