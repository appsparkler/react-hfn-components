import React from 'react'
const UploadDetailRow = ({uploadDetail}) => {
  const [progress, setProgress] = React.useState(0)
  uploadDetail.uploadTask.on('state_changed', ({bytesTransferred, totalBytes}) => {
    setProgress((bytesTransferred/totalBytes) * 100)
  })
  return (<tr>
    <td>{uploadDetail.file.name}</td>
    <td>{uploadDetail.file.size} bytes</td>
    <td>{progress}</td>
    <td><progress max="100" value={progress}>70%</progress></td>
  </tr>)
}


export default ({uploadDetails}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>File Name</th>
          <th>File Size</th>
          <th>Progress</th>
        </tr>
      </thead>
      <tbody>
        {
          uploadDetails.map((uploadDetail) => (
            <UploadDetailRow
              uploadDetail={uploadDetail}
            />))
        }
      </tbody>
    </table>
  )
}
