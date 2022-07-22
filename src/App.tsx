import { useState } from 'react'
import { Nav, Button } from '../components'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button type="error">{123}</Button>
      <Nav navData={[{text: 1}, {text: 2}, {text: 3}]}/>
    </div>
  )
}

export default App
