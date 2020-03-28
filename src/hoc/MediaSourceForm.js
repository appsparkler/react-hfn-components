import React from 'react'
import PropTypes from 'prop-types'

const MediaSourceForm = ({mediaSource}) => (
  <div>Media Source Form</div>
)

MediaSourceForm.propTypes = {
  mediaSource: PropTypes.string,
}

export default MediaSourceForm

export const MemoMediaSourceForm = React.memo(MediaSourceForm)
