import React from 'react'
import AbhyasiIdField from './components/AbhyasiIdField'
import FirebaseApp from './firebase/setup'

export default {
  title: 'Firebase',
}

export const scanEvent = () => {
  return (
    <div>
      <h1>Scan ID</h1>
      <AbhyasiIdField />
    </div>
  )
}

function mapFirebaseDocsToDataDocs(firebaseDoc) {
  console.log(firebaseDoc)
}

function handleSnapShot(
    {setCount, setDocs}, snapshot,
) {
  // const docs =
  snapshot.docs.map(mapFirebaseDocsToDataDocs)
  setCount(snapshot.size)
}

function componentDidMount({
  setCount, setDocs,
}) {
  const db = FirebaseApp.firestore()
  const unsubscribe = db
      .collection('abhyasis-in-ashram')
      .onSnapshot(handleSnapShot.bind(null, {
        setCount, setDocs,
      }))
  return () => {
    unsubscribe()
  }
}


const cellStylesSm = {width: '10%', textAlign: 'center'}
const cellStylesLg = {width: '30%', textAlign: 'center'}

const getRows = (docs) => docs.map((doc, idx) => {
  return (
    <tr key={doc.id}>
      <td style={cellStylesSm}>{idx}</td>
      <td style={cellStylesSm}>{doc.id}</td>
      <td style={cellStylesLg}>{new Date(doc.timestamp).toTimeString()}</td>
    </tr>
  )
})
export const currentCount = () => {
  const [count, setCount] = React.useState(0)
  const [docs, setDocs] = React.useState([{
    id: 'INAAAE478',
    timestamp: new Date().valueOf(),
  }])
  React.useEffect(componentDidMount.bind(null, {
    setCount, setDocs,
  }))
  return (
    <div>
      <h1>Kitchen Service</h1>
      <h2>Abhyasis In Ashram : {count}</h2>
      <table>
        <thead>
          <tr>
            <th style={cellStylesSm}>Sr #</th>
            <th style={cellStylesSm}>Abhyasi ID</th>
            <th style={cellStylesLg}>Sanned Time</th>
          </tr>
          {getRows(docs)}
        </thead>
      </table>
    </div>
  )
}
