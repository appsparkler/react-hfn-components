// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'
// import {initializeIcons} from '@uifabric/icons'
// import 'office-ui-fabric-react/dist/css/fabric.min.css'
//
// initializeIcons()
//
// ReactDOM.render(<App />, document.getElementById('root'))
//
// if (module.hot) {
//   module.hot.accept()
// }
/*
import * as ZXing from '@zxing/library'

window.addEventListener('load', function() {
  let selectedDeviceId
  const codeReader = new ZXing.BrowserMultiFormatReader()
  console.log('ZXing code reader initialized')
  codeReader.getVideoInputDevices()
      .then((videoInputDevices) => {
        const sourceSelect = document.getElementById('sourceSelect')
        selectedDeviceId = videoInputDevices[0].deviceId
        if (videoInputDevices.length >= 1) {
          videoInputDevices.forEach((element) => {
            const sourceOption = document.createElement('option')
            sourceOption.text = element.label
            sourceOption.value = element.deviceId
            sourceSelect.appendChild(sourceOption)
          })

          sourceSelect.onchange = () => {
            selectedDeviceId = sourceSelect.value
          }

          const sourceSelectPanel = document.getElementById('sourceSelectPanel')
          sourceSelectPanel.style.display = 'block'
        }

        document.getElementById('startButton').addEventListener(
            'click',
            () => {
              codeReader
                  .decodeFromVideoDevice(
                      selectedDeviceId, 'video',
                      (result, err) => {
                        if (result) {
                          console.log(result)
                          document
                              .getElementById('result')
                              .textContent = result.text
                        }
                        if (err && !(err instanceof ZXing.NotFoundException)) {
                          console.error(err)
                          document.getElementById('result').textContent = err
                        }
                      })
              console
                  .log(`Started continous
                decode from camera with id ${selectedDeviceId}`,
                  )
            },
        )

        document.getElementById('resetButton').addEventListener(
            'click',
            () => {
              codeReader.reset()
              document.getElementById('result').textContent = ''
              console.log('Reset.')
            },
        )
      })
      .catch((err) => {
        console.error(err)
      })
})
*/
