import Task from "./Task";

export default function DisplayTasks({ tasks, onDelete }) {
  const groupByPriority = tasks.reduce((acc, task) => {
    if (acc[task.priority] === undefined) acc[task.priority] = [task];
    else acc[task.priority].push(task);
    return acc;
  }, {});

  return (
    <div className="row mt-4">
      {Object.keys(groupByPriority).map((priority) => {
        return (
          <div key={priority} className="col-sm-4">
            <h4>{priority.at(0).toUpperCase() + priority.slice(1)} Priority</h4>
            <ul className="list-group">
              {groupByPriority[priority].map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} />
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
