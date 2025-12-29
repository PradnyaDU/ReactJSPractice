import React, { useState } from "react";
import "../ComponentsCSS/TaskListCss.css";

export const TaskList = () => {
  const [tasks, settasks] = useState([
    { Name: "Sample Task 1", id: 1, completed: false },
    { Name: "Sample Task 2", id: 2, completed: false },
    { Name: "Sample Task 3", id: 3, completed: false },
  ]);

  const handleAddTask = () => {
    const newTask = prompt("Enter a new task:");
    if (!newTask) return;
    settasks([
      ...tasks,
      {
        Name: newTask,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        completed: false,
      },
    ]);
  };

  const deleteTask = (idToDelete) => {
    console.log("Delete task with id:", idToDelete);
    if (window.confirm("Are you sure you want to delete this task?")) {
      const filteredTasks = tasks.filter((task) => task.id !== idToDelete);
      settasks(filteredTasks);
    }
  };

  const markAsCompleted = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    settasks(updatedTasks);
  };

  return (
    <div className="page-container">
      <div className="task-wrapper">
        <h4 className="mb-4">📝 My Tasks</h4>
        {tasks.map((task) => (
          <div className="task-item" key={task.id}>
            <span className={task.completed ? "completed-task" : ""}>
              {task.Name}
            </span>

            <div className="task-actions">
              {task.completed ? (
                <span className="badge bg-success" style={{ marginRight: 10 }}  title="This task is completed">
                  Completed
                </span>
              ) : (
                <button
                  className="btn btn-md btn-success"
                  style={{ marginRight: 10 }}
                  onClick={() => markAsCompleted(task.id)}
                  title="Mark as Complete"
                >
                  ✓
                </button>
              )}

              <button
                className="btn btn-md btn-danger"
                 title="Delete the task"
                onClick={() => deleteTask(task.id)}
              >
                🗑
              </button>
            </div>
          </div>
        ))}
        <button
          className="btn btn-primary add-task-btn"
          onClick={handleAddTask}
        >
          ➕ Add Task
        </button>
      </div>
    </div>
  );
};
export default TaskList;
