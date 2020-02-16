
export default function useFileLinkWithDeleteButton({props}) {
  const {file, setFile} = props.sharedState
  const deleteFile = () => {
    setFile(null)
  }

  return {
    deleteFile,
    file,
  }
}
