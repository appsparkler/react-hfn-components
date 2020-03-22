import React from 'react'
import PropTypes from 'prop-types'
import {
  Stack,
  Spinner,
  SpinnerSize,
  Link,
} from 'office-ui-fabric-react'

const FirebaseFileLink = ({file, isVerifying, isUploading}) => (
  <Stack tokens={{childrenGap: 20, maxWidth: 250}}>
    {isVerifying && (
      <div>
        <Spinner label="verifying" size={SpinnerSize.large} />
      </div>)
    }
    {file && file.downloadURL && (
      <div>
        <Link href={file.downloadURL}>{file.fileName}</Link>
      </div>
    )}
  </Stack>
)

FirebaseFileLink.propTypes = {
  file: PropTypes.object,
  isVerifying: PropTypes.bool.isRequired,
  isUploading: PropTypes.bool,
}

export default FirebaseFileLink
