import useFileFromStorageRef from './useFileFromStorageRef'

export default ({storageRef}) => {
  const {file, isVerifying} = useFileFromStorageRef({storageRef})
  return {
    file,
    isVerifying,
  }
}
