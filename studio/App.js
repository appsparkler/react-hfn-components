import React from 'react'
import PropTypes from 'prop-types'
import './styles'
import {
  Shimmer, ShimmerElementType,
  Image,
} from 'office-ui-fabric-react'

const ProfilePhoto = ({height, width, src}) => {
  const [isLoading, setIsLoading] = React.useState(true)
  return (
    <Shimmer
      width={width}
      shimmerElements={[
        {type: ShimmerElementType.line, height},
      ]}
      isDataLoaded={!isLoading}
    >
      <Image
        src={src}
        width={width}
        shouldStartVisible={true}
        onLoad={() => setIsLoading(false)}
      />
    </Shimmer>
  )
}

ProfilePhoto.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
}

ProfilePhoto.defaultProps = {
  height: 180,
  width: 180,
  src: 'http://placekitten.com/180/180',
}


const StudioApp = () => {
  return (
    <div className="ms-Grid" dir="ltr">
      <ProfilePhoto
        height={180}
        width={180}
        src="http://placekitten.com/200/200"
      />
    </div>
  )
}

export default StudioApp
