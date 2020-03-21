import Croppie from 'croppie'

async function handleCroppieUpdates({
  croppie, setCroppedDataURL,
}) {
  const croppedDataURL = await croppie.result()
  setCroppedDataURL(croppedDataURL)
}

function setupCroppie({
  croppieRef, croppieConfig, setCroppie, setCroppedDataURL,
}) {
  if (!croppieRef.current) return
  const croppie = new Croppie(croppieRef.current, croppieConfig)
  setCroppie(croppie)
  croppie.element.addEventListener(
      'update',
      handleCroppieUpdates.bind(null, {
        croppie, setCroppedDataURL,
      }),
  )
}


/**
 * @typedef {Object} UseCroppieReturnObject
 * @property {function} setupCroppie - Setsup the Croppie on the element on
 croppieRef.current element (croppieRef is a React.useRef()
 passed to the function)
 */

/**
* Hook for setting up a Croppie.
For more on Croppie visit https://foliotek.github.io/Croppie/.
* @return {UseCroppieReturnObject}
*/
export default ({
  croppieRef, croppieConfig, setCroppie, setCroppedDataURL,
}) => {
  return {
    setupCroppie: setupCroppie.bind(null, {
      croppieRef, setCroppie, croppieConfig, setCroppedDataURL,
    }),
  }
}
