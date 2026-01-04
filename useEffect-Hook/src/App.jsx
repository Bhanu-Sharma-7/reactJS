import React, { useEffect } from 'react'

const App = () => {

  const [time, setTime] = React.useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
      console.log("Clock Updating....")
    }, 1000);

    return () => clearInterval(interval)
  }, [])
  return (
    <div style={{ textAlign: 'center', fontFamily: 'monospace' }}>
      <h2 style={{ fontSize: '3rem' }}>Digital Clock</h2>
      <h1 style={{ fontSize: '3rem', color: '#61dafb' }}>{time}</h1>
    </div>
  )
}

export default App
