import React from "react";
import "../ComponentsCSS/TaskListCss.css";

export const TaskList = () => {
  
   return (
    <div className="page-container">
      <div className="task-wrapper">
        <h4 className="mb-4">📝 My Tasks</h4>

        {/* {tasks.map((task, index) => ( */}
          <div className="task-item" >
            <span>Tasks</span>
            <button
              className="btn btn-sm btn-danger"
            //   onClick={() => deleteTask(index)}
            >
              <i className="bi bi-trash"></i>
            </button>
          </div>
        {/* ))} */}

        <button className="btn btn-primary add-task-btn" >
          ➕ Add Task
        </button>
      </div>
    </div>
  );
};
