import React from 'react'
import BarCodeScannerWireframe
  from '@react-hfn-components/BarCodeScanner/_wireframe'
import BarCodeScanner from '@react-hfn-components/BarCodeScanner'
export default {
  title: 'Bar Code Scanner',
}

export const Component = () => {
  return (
    <BarCodeScanner />
  )
}

export const wireframe = () => {
  return (
    <BarCodeScannerWireframe />
  )
}
