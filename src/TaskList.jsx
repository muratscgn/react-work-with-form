import { useEffect, useState } from "react"
import TaskListItem from "./TaskListItem"

export default function TaskList({ tasks, removeTask, editTask, doneTask }) {

  const [priority, setPriority] = useState(false)
  const [filteredTasks, setFilteredTask] = useState(tasks)

  function handlePriorityFilter() {
    const newPriority = !priority
    newPriority ? setFilteredTask(tasks.filter(item => item.priority === newPriority)) : setFilteredTask(tasks)
    setPriority(newPriority)
    console.log("priority", priority)
  }

  // tasks bilgisi component'e ulaşınca filtera eşitle
  useEffect(() => {
    setFilteredTask(tasks)
  }, [tasks])

  // priority bilgisi değişirse 
  // useEffect(() => {
  //   priority ? setFilteredTask(tasks.filter(item => item.priority === priority)) : setFilteredTask(tasks)
  // }, [priority])

  if (tasks.length === 0) {
    return <></>
  }

  return (
    <>
      <div className="p-4 bg-light mt-5 border rounded">
        <h2 className="mb-3">My Tasks:
          <button
            onClick={handlePriorityFilter}
            className={`btn btn-sm ${!priority ? "btn-info" : "bg-primary"} float-end fs-5`}
          >
            {!priority ? "Priority" : "Show All"}
          </button>
        </h2>
        <ul className="list-group">
          {filteredTasks.map(
            (task) =>
              <TaskListItem key={task.uuid} task={task} editTask={editTask} removeTask={removeTask} doneTask={doneTask} />
          )}
        </ul>
      </div >
    </>
  )
}