export default function({props}) {
  const {file, setFile} = props
  const sharedState = {
    file, setFile,
  }
  return {
    sharedState,
  }
}
