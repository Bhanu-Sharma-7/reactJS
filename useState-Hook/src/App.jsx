import React from 'react'

const App = () => {
  const [count, setCount] = React.useState(0)
  return (
    <div className='container'>
      <h1>My Counter: {count}</h1>
      <div>
        <button onClick={() => {
          setCount(count + 1)
        }}>Increase(+)</button>
        <button onClick={() => {
          setCount(count - 1)
        }}>Decrease (-)</button>
      </div>
    </div>
  )
}

export default App
