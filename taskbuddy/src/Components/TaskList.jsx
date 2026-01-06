import React, { useState } from "react";
import "../ComponentsCSS/TaskListCss.css";
import { TaskCard } from "./TaskCard";
import { AddTaskModal } from "./AddTaskModal";
import { EditTaskModal } from "./EditTaskModal";

export const TaskList = ({ info }) => {
  const [tasks, settasks] = useState([
    { Name: "Sample Task 1", id: 1, completed: false },
    { Name: "Sample Task 2", id: 2, completed: false },
    { Name: "Sample Task 3", id: 3, completed: false },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleEditTask = (task) => {
    setTaskToEdit(task);
    setShowModal(true);
  };

  const handleAddTask = () => {
    setTaskToEdit(null);
    setShowModal(true);
  };

  const deleteTask = (idToDelete) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      settasks(tasks.filter((task) => task.id !== idToDelete));
    }
  };

  const markAsCompleted = (id) => {
    settasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleSave = (data) => {
    if (taskToEdit) {
      settasks(tasks.map((task) => (task.id === data.id ? data : task)));
    } else {
      settasks([
        ...tasks,
        {
          Name: data,
          id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
          completed: false,
        },
      ]);
    }
    setShowModal(false);
  };

  return (
    <div className="page-container">
      <div className="task-wrapper">
        <h4 className="mb-4"> My Tasks</h4>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            markAsCompleted={markAsCompleted}
            deleteTask={deleteTask}
            handleEditTask={() => handleEditTask(task)}
            info={info}
          />
        ))}

        {showModal &&
          (taskToEdit ? (
            <EditTaskModal
              show
              onClose={() => setShowModal(false)}
              task={taskToEdit}
              onDelete={deleteTask}
              onSave={handleSave}
            />
          ) : (
            <AddTaskModal
              show
              onClose={() => setShowModal(false)}
              onSave={handleSave}
            />
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
