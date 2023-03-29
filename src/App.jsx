import { useState } from "react"
import TaskManager from "./components/TaskManager"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <TaskManager />
    </div>
  )
}

export default App
