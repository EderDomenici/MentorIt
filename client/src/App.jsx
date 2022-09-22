import { useState } from 'react'
import { Profile } from './components/profile'
import { Login } from './components/login';






function App() {
  const [count, setCount] = useState(0)

  return (
      <Login />
  )
}

export default App
