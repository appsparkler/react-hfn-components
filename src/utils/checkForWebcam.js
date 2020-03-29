export default async function checkForWebcam({valueSetter}) {
  try {
    const userMedia = await navigator
        .mediaDevices.getUserMedia({
          video: true, audio: false,
        })
    if (userMedia) valueSetter(true)
  } catch (e) {
    valueSetter(false)
    alert(typeof userMedia)
  }
}
