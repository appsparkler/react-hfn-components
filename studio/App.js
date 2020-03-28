import React from 'react'
import PropTypes from 'prop-types'
import './styles'
import {
  Shimmer, ShimmerElementType,
  Image,
} from 'office-ui-fabric-react'

function srcDidChange({setIsLoading}) {
  setIsLoading(true)
}


const ProfilePhoto = ({height, width, src}) => {
  const [isLoading, setIsLoading] = React.useState(true)
  React.useEffect(srcDidChange.bind(null, {setIsLoading}), [src])
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
        onLoad={() => {
          setIsLoading(false)
        }}
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

function handleSubmit({setImgSrc}, evt) {
  evt.preventDefault()
  const imgSrc = evt?.target?.children?.imgSrc?.value
  if (imgSrc) setImgSrc(imgSrc)
}
const StudioApp = () => {
  const [imgSrc, setImgSrc] = React.useState()
  const MemoReactPhoto = React.memo(ProfilePhoto)
  return (
    <div className="ms-Grid" dir="ltr">
      <MemoReactPhoto
        height={180}
        width={180}
        src={imgSrc}
      />
      <form onSubmit={handleSubmit.bind(null, {setImgSrc})}>
        <input type="text" name="imgSrc" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default StudioApp
