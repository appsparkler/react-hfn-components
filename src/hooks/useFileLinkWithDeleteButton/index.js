
export default function useFileLinkWithDeleteButton({props}) {
  const {file, setFile} = props
  const deleteFile = () => {
    setFile(null)
  }

  return {
    deleteFile,
    file,
  }
}
