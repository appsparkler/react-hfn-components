import Croppie from 'croppie'

function setupCroppie({croppieRef, croppieConfig, setCroppie}) {
  if (!croppieRef.current) return
  const croppie = new Croppie(croppieRef.current, croppieConfig)
  setCroppie(croppie)
}

export default ({croppieRef, croppieConfig, setCroppie}) => {
  return {
    setupCroppie: setupCroppie.bind(null, {
      croppieRef, setCroppie, croppieConfig,
    }),
  }
}
