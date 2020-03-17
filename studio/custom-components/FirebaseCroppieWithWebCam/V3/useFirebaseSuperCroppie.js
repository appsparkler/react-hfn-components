import useFileFromStorageRef from './useFileFromStorageRef'

export default ({storageRef}) => {
  const {file} = useFileFromStorageRef({storageRef})
  return {
    file,
  }
}
