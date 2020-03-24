import React from 'react'
import PropTypes from 'prop-types'
import {
  Stack,
  Spinner,
  SpinnerSize,
  Link,
  MessageBar,
} from 'office-ui-fabric-react'

const FirebaseFileLink = ({file, isVerifying, isUploading}) => (
  <Stack tokens={{childrenGap: 20, maxWidth: 250}}>
    {isUploading && (
      <div>
        <Spinner label="Uploading..." size={SpinnerSize.large} />
      </div>)
    }
    {isVerifying && (
      <div>
        <Spinner label="Verifying..." size={SpinnerSize.large} />
      </div>)
    }
    {file && !isVerifying && !isUploading && file.downloadURL && (
      <div>
        <Link href={file.downloadURL}>{file.fileName}</Link>
      </div>
    )}
    {!file && !isVerifying && !isUploading && (
      <MessageBar>File not uploaded...</MessageBar>
    )}
  </Stack>
)

FirebaseFileLink.propTypes = {
  file: PropTypes.object,
  isVerifying: PropTypes.bool.isRequired,
  isUploading: PropTypes.bool,
}

export default FirebaseFileLink
