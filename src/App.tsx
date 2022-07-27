import { useState } from 'react'
import ButtonEx from './example/button'
import './App.css'

function App() {
  const [example, setExample] = useState('')
  function currentEx() {
    let ex: React.ReactNode
    if(example === 'button') {
      ex = <ButtonEx />
    }
    return ex
  }
  return (
    <div className="App">
      <div onClick={()=> {setExample('')}}>首页</div>
      {!example ?<div>
        <a onClick={() => {setExample('button')}}>button</a>
      </div> : ''}
      {currentEx()}
    </div>
  )
}

export default App
