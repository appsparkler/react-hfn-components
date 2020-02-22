import React from 'react'
import Croppie from 'croppie'
import 'croppie/croppie.css'

function componentDidMount({props, croppieRef, setCroppie}) {
  const {selectedFile, croppieConfig} = props
  const config = {
    url: selectedFile,
    ...croppieConfig,
  }
  const croppie = new Croppie(croppieRef.current, config)
  setCroppie(croppie)
}

async function handleClick({croppie, imgRef}) {
  const croppedImg= await croppie.result()
  imgRef.current.src = croppedImg
}

const CroppieInput = (props) => {
  const croppieRef = React.createRef()
  const imgRef = React.createRef()
  const [croppie, setCroppie] = React.useState(null)
  React.useEffect(componentDidMount.bind(null, {props, croppieRef, setCroppie}), [])
  return (
    <div className="RFHN-Croppie">
      <div>
        <div ref={croppieRef}></div>
      </div>
      <img src="" ref={imgRef} />
      <button
        onClick={handleClick.bind(null, {croppie, imgRef})}
      >
        Accept Picture
      </button>
    </div>
  )
}

export default CroppieInput
