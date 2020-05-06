import React from 'react'
import FirebaseApp from './firebase/setup'
import uuid from 'uuid'

export default {
  title: 'Firebase',
}
async function handleClick() {
  const db = FirebaseApp.firestore()
  const docName = uuid()
  await db
      .collection('abhyasis-in-ashram')
      .doc(docName)
      .set({
        id: 'INAAAE478',
        timestamp: new Date().valueOf(),
      })
}

export const scanEvent = () => {
  return (
    <div>
      <h1>Scan ID</h1>
      <button onClick={handleClick}>Scan</button>
    </div>
  )
}

function handleSnapShot({setCount}, snapshot) {
  setCount(snapshot.size)
}

function componentDidMount({
  setCount,
}) {
  const db = FirebaseApp.firestore()
  const unsubscribe = db
      .collection('abhyasis-in-ashram')
      .onSnapshot(handleSnapShot.bind(null, {setCount}))
  return () => {
    unsubscribe()
  }
}

export const currentCount = () => {
  const [count, setCount] = React.useState(0)
  React.useEffect(componentDidMount.bind(null, {
    setCount,
  }))
  return (
    <div>
      <h1>Kitchen Service</h1>
      <h2>Abhyasis In Ashram : {count}</h2>
    </div>
  )
}
