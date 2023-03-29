import React, { useState } from "react"
import Select from "react-select"

const options = [
  { value: "task1", label: "Task 1" },
  { value: "task2", label: "Task 2" },
  { value: "task3", label: "Task 3" },
  { value: "task4", label: "Task 4" },
  { value: "task5", label: "Task 5" },
]

const TaskManager = () => {
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleTitleChange = (event) => {
    const { value } = event.target
    setTitle(value.replace(/[^A-Za-z]/g, ""))
  }

  const handleDescriptionChange = (event) => {
    const { value } = event.target
    setDescription(value.slice(0, 100))
  }

  const handleAddTask = () => {
    if (title.trim() === "" || description.trim() === "") {
      return
    }

    setTasks([...tasks, { title, description }])
    setTitle("")
    setDescription("")
  }

  const handleDeleteTasks = () => {
    const remainingTasks = tasks.filter((task) => !selectedTasks.includes(task))
    setTasks(remainingTasks)
  }

  const [selectedTasks, setSelectedTasks] = useState([])
  const handleTaskSelectChange = (selectedOptions) => {
    const selectedTasks = selectedOptions.map((option) => option.value)
    setSelectedTasks(selectedTasks)
  }

  return (
    <div>
      <h1>Task Manager</h1>
      <form>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <button type="button" onClick={handleAddTask}>
          Add Task
        </button>
      </form>
      <div>
        <h2>Selected Tasks:</h2>
        <Select isMulti options={options} onChange={handleTaskSelectChange} />
        <button type="button" onClick={handleDeleteTasks}>
          Delete Selected Tasks
        </button>
      </div>
      <div>
        <h2>All Tasks:</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <div>{task.title}</div>
              <div>{task.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TaskManager
