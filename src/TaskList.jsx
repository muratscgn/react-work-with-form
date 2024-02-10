export default function TaskList({ tasks, removeTask, editTask }) {

  if (tasks.length === 0) {
    return <></>
  }

  return (
    <>
      <div className="p-4 bg-light mt-5 border rounded">
        <h1>My Tasks:</h1>
        <ul className="list-group">
          {tasks.map(
            (item) =>
              <li className="list-group-item" key={item.uuid}>
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
      </div>
    </>
  )
}