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

async function mapFirebaseDocsToDataDocs({
  setDocs,
}, firebaseDoc) {
  const doc = await firebaseDoc.ref.get({
    source: 'cache',
  })
  const docData = await doc.data()
  setDocs((docs) => {
    return [
      ...docs,
      docData,
    ]
  })
}

function handleSnapShot({
  setCount, setDocs,
}, snapshot) {
  setDocs([])
  snapshot.docs.map(mapFirebaseDocsToDataDocs.bind(null, {
    setDocs,
  }))
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
      <td style={cellStylesSm}>{idx + 1}</td>
      <td style={cellStylesSm}>{doc.id}</td>
      <td style={cellStylesLg}>
        {new Date(doc.timestamp).toLocaleDateString()} @ {
          new Date(doc.timestamp).toLocaleTimeString()
        }
      </td>
    </tr>
  )
})
export const currentCount = () => {
  const [count, setCount] = React.useState(0)
  const [docs, setDocs] = React.useState([])
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
            <th style={cellStylesLg}>Scanned Time</th>
          </tr>
          {getRows(docs)}
        </thead>
      </table>
    </div>
  )
}
