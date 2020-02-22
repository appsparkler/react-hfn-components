import React from 'react'
import Croppie from 'croppie'
import 'croppie/croppie.css'

function componentDidMount({croppieRef, setCroppie}) {
  const config = {
    url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/97fe5d1a-d103-48f3-a1dd-19687e2dd8ec/d49hyxj-afbbe9da-2e10-40f3-816c-ada982a9b95c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk3ZmU1ZDFhLWQxMDMtNDhmMy1hMWRkLTE5Njg3ZTJkZDhlY1wvZDQ5aHl4ai1hZmJiZTlkYS0yZTEwLTQwZjMtODE2Yy1hZGE5ODJhOWI5NWMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.QT13Q3EAFSmKsI6uQ2HxQYF4qItCl26RAmdIR56C1kw',
    viewport: {width: 100, height: 100},
    boundary: {width: 100, height: 100},
  }
  const croppie = new Croppie(croppieRef.current, config)
  setCroppie(croppie)
}

async function handleClick({croppie, imgRef}) {
  const croppedImg= await croppie.result()
  imgRef.current.src = croppedImg
}

const FirebasePhotoInput = () => {
  const croppieRef = React.createRef()
  const imgRef = React.createRef()
  const [croppie, setCroppie] = React.useState(null)
  React.useEffect(componentDidMount.bind(null, {croppieRef, setCroppie}), [])
  return (
    <div>
      <div>
        <div ref={croppieRef}></div>
      </div>
      <img src="" ref={imgRef} />
      <button onClick={handleClick.bind(null, {croppie, imgRef})}>Crop</button>
    </div>
  )
}


export default FirebasePhotoInput

function Slider({value}) {
  return (<div className="Slider">
    <input type="range" min="0" max="100" />
  </div>)
}
