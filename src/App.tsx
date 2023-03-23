import { useState } from 'react'
import './App.css'
import Root from './Root'
import configureStore from './store/configureStore'

function App() {
  const [count, setCount] = useState(0)
  const store = configureStore();

  return (
    <div className="App">
      <Root store={store} />
    </div>
  )
}

export default App
