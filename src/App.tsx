import { useState } from 'react'
import ButtonEx from './example/button'
import './App.css'
import IconEx from './example/icon'

function App() {
  const [example, setExample] = useState('')
  function currentEx() {
    let ex: React.ReactNode
    if(example === 'button') {
      ex = <ButtonEx />
    } else if (example === 'icon') {
      ex = <IconEx />
    }
    return ex
  }
  return (
    <div className="App">
      <div onClick={()=> {setExample('')}}>首页</div>
      {!example ?<div>
        <a onClick={() => {setExample('button')}}>button</a>
        <a onClick={() => {setExample('icon')}}>icon</a>
      </div> : ''}
      {currentEx()}
    </div>
  )
}

export default App
