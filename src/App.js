import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTasks] = useState(true)
  const [tasks, setTasks] = useState([
    {
      id: 3,
      text: 'Example of event',
      day: 'Feb 6th, 2023 at 2:30pm',
      reminder: true,
    },
  ])

  const addTask = (task) => {
    const id = Math.floor(Math.random()* 10000) + 1

    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
      setTasks(tasks.map((task) => task.id === id ? { ...task,reminder : !task.reminder} : task
      )
    )
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTasks(!showAddTask)} showAddTask={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      { tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask}
      onToggle={toggleReminder}/>) : ( 'No task to show')}
    </div>
  );
}

export default App;
