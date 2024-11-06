import { useState } from 'react'
import TodoMain from './components/TodoMain'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoMain/>
    </>
  )
}

export default App
