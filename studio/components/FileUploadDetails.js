import React from 'react'
const UploadDetailRow = ({uploadDetail}) => (<tr>
  <td>{uploadDetail.file.name}</td>
  <td>{uploadDetail.file.size} bytes</td>
  <td><progress max="100" value={uploadDetail.progress}>70%</progress></td>
</tr>)


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
