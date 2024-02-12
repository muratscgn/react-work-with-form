import TaskListItemIcon from "./TaskListItemIcon"

function TaskListItem({ task, editTask, removeTask, doneTask }) {
  return (
    <li className={`list-group-item ${task.isDone && "bg-success bg-gradient"}`}>
      {task.priority &&
        <span className="badge text-bg-secondary me-2">
          <TaskListItemIcon></TaskListItemIcon>
        </span>
      }
      {task.task}
      <div className="btn-group float-end" role="group">
        <button className="btn btn-success" onClick={() => doneTask(task.uuid)}>
          Done
        </button>
        <button className="btn btn-info" onClick={() => editTask(task.uuid)}>
          Edit
        </button>
        <button className="btn btn-danger" onClick={() => removeTask(task.uuid)}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TaskListItem