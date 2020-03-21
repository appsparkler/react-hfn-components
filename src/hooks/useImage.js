async function loadSrc({src, setIsLoading, setLoaded}) {
  try {
    setLoaded(false)
    setIsLoading(true)
    const imgData = await fetch(src)
    await fetch(imgData.url)
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
    loadSrc: loadSrc.bind(null, {
      src, setIsLoading, setLoaded,
    }),
  }
}
