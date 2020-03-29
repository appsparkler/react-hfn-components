export default function checkForWebcam({valueSetter}) {
  try {
    window.navigator.mediaDevices.getUserMedia({video: true, audio: false})
    valueSetter(true)
  } catch (e) {
    valueSetter(false)
  }
}
