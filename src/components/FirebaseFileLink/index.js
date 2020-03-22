import React from 'react'
import PropTypes from 'prop-types'
import {
  Stack,
  Spinner,
  SpinnerSize,
  Link,
} from 'office-ui-fabric-react'
import useFirebaseFileLink from './useFirebaseFileLink'

const FirebaseFileLink = ({storageRef}) => {
  const {file, isVerifying} = useFirebaseFileLink({storageRef})
  return (
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
}

FirebaseFileLink.propTypes = {
  storageRef: PropTypes.object.isRequired,
}

export default FirebaseFileLink
