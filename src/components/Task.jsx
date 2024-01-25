export default function Task({ task, onDelete }) {
  return (
    <li className="list-group-item d-flex align-items-center">
      <span>{task.title}</span>
      <button className="btn btn-danger ms-auto" onClick={() => onDelete(task)}>
        Delete
      </button>
    </li>
  );
}
