async function startLoading({src, setIsLoading, setLoaded}) {
  try {
    setLoaded(false)
    setIsLoading(true)
    await fetch(src)
    setIsLoading(false)
    setLoaded(true)
    debugger
  } catch (e) {
    setIsLoading(false)
    console.error(e)
  }
}

export default ({src, setIsLoading, setLoaded}) => {
  return {
    startLoading: startLoading.bind(null, {
      src, setIsLoading, setLoaded,
    }),
  }
}
