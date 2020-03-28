import React from 'react'
import {MemoProfilePhoto} from '@react-hfn-hoc/ProfilePhoto'
import './styles'

function handleSubmit({setImgSrc}, evt) {
  evt.preventDefault()
  const imgSrc = evt?.target?.children?.imgSrc?.value
  if (imgSrc) setImgSrc(imgSrc)
}

const StudioApp = () => {
  const [imgSrc, setImgSrc] = React.useState()
  return (
    <div className="ms-Grid" dir="ltr">
      <MemoProfilePhoto
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
