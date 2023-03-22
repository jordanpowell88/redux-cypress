import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DevTools from './components/DevTools'
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
