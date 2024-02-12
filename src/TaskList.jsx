import { useEffect, useState } from "react"

export default function TaskList({ tasks, removeTask, editTask }) {

  const [priority, setPriority] = useState(false)
  const [filteredTasks, setFilteredTask] = useState(tasks)

  function handlePriorityFilter() {
    setPriority(prev => !prev)
    console.log("priority", priority)
  }

  // tasks bilgisi component'e ulaşınca filtera eşitle
  useEffect(() => {
    setFilteredTask(tasks)
  }, [tasks])

  // priority bilgisi değişirse 
  useEffect(() => {
    priority ? setFilteredTask(tasks.filter(item => item.priority === priority)) : setFilteredTask(tasks)
  }, [priority])

  if (tasks.length === 0) {
    return <></>
  }

  return (
    <>
      <div className="p-4 bg-light mt-5 border rounded">
        <h2 className="mb-3">My Tasks:
          <span
            onClick={handlePriorityFilter}
            className={`btn btn-sm ${!priority ? "btn-info" : "bg-primary"} float-end fs-5`}
          >
            {!priority ? "Priority" : "Show All"}
          </span>
        </h2>
        <ul className="list-group">
          {filteredTasks.map(
            (item) =>
              <li className="list-group-item" key={item.uuid}>
                {item.priority &&
                  <span className="badge text-bg-secondary me-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-star-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5M8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.18.18 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.18.18 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.18.18 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.18.18 0 0 1-.134-.098z" />
                    </svg>
                  </span>
                }
                {item.task}
                <div className="btn-group float-end" role="group">
                  <button className="btn btn-info" onClick={() => editTask(item.uuid)}>
                    Edit
                  </button>
                  <button className="btn btn-danger" onClick={() => removeTask(item.uuid)}>
                    Delete
                  </button>
                </div>
              </li>
          )}
        </ul>
      </div >
    </>
  )
}