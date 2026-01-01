import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "../ComponentsCSS/modalcss.css";

export const EditTaskModal = ({ task, show, onClose, onSave, onDelete }) => {
  const [taskName, setTaskName] = useState("");
  const [completed, setCompleted] = useState(false);

  // Initialize modal fields when task changes
  useEffect(() => {
    if (task) {
      setTaskName(task.Name);
      setCompleted(task.completed);
    }
  }, [task]);

  const handleSave = () => {
    onSave({
      ...task,
      Name: taskName,
      completed: completed,
    });
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      onDelete(task.id);
      onClose();
    }
  };

  return (
    <Modal
      show={show}
      onHide={onClose}
      centered
      backdrop="static"
      contentClassName="orange-modal"
    >
      {/* HEADER */}
      <Modal.Header className="orange-header">
        <Modal.Title>
          <p className="subtitle">Edit Task</p>
        </Modal.Title>
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
      </Modal.Header>

      {/* BODY */}
      <Modal.Body className="orange-body">
        {/* ID (read-only) */}
        <Form.Group className="mb-3">
          <Form.Label>Task ID</Form.Label>
          <Form.Control type="text" value={task?.id || ""} readOnly />
        </Form.Group>

        {/* Name */}
        <Form.Group className="mb-3">
          <Form.Label>Task Name</Form.Label>
          <Form.Control
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="orange-input"
            autoFocus
          />
        </Form.Group>

        {/* Completed Toggle */}
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Completed"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
        </Form.Group>
      </Modal.Body>

      {/* FOOTER */}
      <Modal.Footer className="orange-footer">
        <Button className="delete-btn" onClick={handleDelete} variant="danger">
          Delete
        </Button>
        <Button className="cancel-btn" onClick={onClose}>
          Cancel
        </Button>
        <Button
          style={{
            background: "linear-gradient(135deg, #dd9013ff, #ffd166)",
            border: "none",
            color: "#3a0ca3",
            fontWeight: "600",
          }}
          onClick={handleSave}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
