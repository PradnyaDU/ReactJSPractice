import React, { useState } from "react";
import "../ComponentsCSS/TaskListCss.css";
import { TaskCard } from "./TaskCard";

export const TaskList = () => {
  const [tasks, settasks] = useState([
    { Name: "Sample Task 1", id: 1, completed: false },
    { Name: "Sample Task 2", id: 2, completed: false },
    { Name: "Sample Task 3", id: 3, completed: false },
  ]);
 const deleteTask = (idToDelete) => {
        console.log("Delete task with id:", idToDelete);
        if (window.confirm("Are you sure you want to delete this task?")) {
          const filteredTasks = tasks.filter((task) => task.id !== idToDelete);
          settasks(filteredTasks);
        }
      };
    
      const markAsCompleted = (id) => {
        const updatedTasks = tasks.map((task) => {
          if (task.id === id) {
            return { ...task, completed: !task.completed }; // toggle completed
          }
          return task; // keep other tasks unchanged
        });

        settasks(updatedTasks); // update state with the new array
      };
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

  return (
    <div className="page-container">
      <div className="task-wrapper">
        <h4 className="mb-4">📝 My Tasks</h4>
         {tasks.map((task) => (
        <TaskCard key={task.id} task={task} markAsCompleted={markAsCompleted} deleteTask={deleteTask}/>
         ))}
        <button
          className="btn btn-primary add-task-btn"
          onClick={handleAddTask}
        >
          + Add Task
        </button>
      </div>
    </div>
  );
};
export default TaskList;
