import * as ZXing from '@zxing/library'
import adapter from 'webrtc-adapter'


export const startScanning = () => {
  // const codeReader = new ZXing.BrowserMultiFormatReader()
  // codeReader
  // .decodeFromVideoDevice(selectedDeviceId, 'video', (result, err) => {
  //             if (result) {
  //               console.log(result)
  //               document.getElementById('result').textContent = result.text
  //             }
  //             if (err && !(err instanceof ZXing.NotFoundException)) {
  //               console.error(err)
  //               document.getElementById('result').textContent = err
  //             }
  //           })
  //
  // console.log(`S
  // tarted continous decode from camera with id ${selectedDeviceId}`)
}

export const getVideoInputDevices = async () => {
  try {
    const codeReader = new ZXing.BrowserMultiFormatReader()
    const videoInputDevices = await codeReader.getVideoInputDevices()
    return videoInputDevices
  } catch (e) {

  } finally {

  }
}

export const getBrowser = () => {
  const browser = adapter.browserDetails.browser
  return browser
}

//
// const codeReader = new ZXing.BrowserMultiFormatReader()
// console.log('ZXing code reader initialized')
// codeReader.getVideoInputDevices()
//     .then((videoInputDevices) => {
//       const sourceSelect = document.getElementById('sourceSelect')
//       selectedDeviceId = videoInputDevices[0].deviceId
//       if (videoInputDevices.length >= 1) {
//         videoInputDevices.forEach((element) => {
//           const sourceOption = document.createElement('option')
//           sourceOption.text = element.label
//           sourceOption.value = element.deviceId
//           sourceSelect.appendChild(sourceOption)
//         })
//
//         sourceSelect.onchange = () => {
//           selectedDeviceId = sourceSelect.value
//         }
//
//        const sourceSelectPanel =
// document.getElementById('sourceSelectPanel')
//         sourceSelectPanel.style.display = 'block'
//       }
//     })
