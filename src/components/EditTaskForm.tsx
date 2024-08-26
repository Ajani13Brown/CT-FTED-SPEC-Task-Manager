import React, { useContext, useState, useEffect } from 'react';
import TasksContext, { Task } from '../Context/Tasklist';
import { useNavigate } from 'react-router-dom';

const EditTaskForm: React.FC = () => {
  const { tasks, setTaskList } = useContext(TasksContext);
  const navigate = useNavigate();

  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);
  const [taskId, setTaskId] = useState<string>("");

  useEffect(() => {
    if (taskId) {
      const task = tasks.find(task => task.id === taskId);
      if (task) {
        setTaskToEdit(task);
      } else {
        setTaskToEdit(null);
      }
    }
  }, [taskId, tasks]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (taskToEdit) {
      const { name, value } = e.target;
      setTaskToEdit(prev => prev ? { ...prev, [name]: value } : null);
    }
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (taskToEdit) {
      const { value } = e.target;
      setTaskToEdit(prev => prev ? { ...prev, status: value as "not-started" | "in-progress" | "completed" } : null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskToEdit) {
      setTaskList(prevList =>
        prevList.map(task => task.id === taskToEdit.id ? taskToEdit : task)
      );
      navigate('/dash');
    }
  };

  return (
    <div className="container center-form border-5">
      <div className="col-md-6">
        <h2 className="text-center">Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="id">Task ID</label>
            <input
              type="text"
              className="form-control"
              id="id"
              name="id"
              placeholder="Enter task ID"
              value={taskId}
              onChange={(e) => setTaskId(e.target.value)}
              required
            />
          </div>
          {taskToEdit && (
            <>
              <div className="form-group">
                <label htmlFor="title">Task Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  placeholder="Enter task name"
                  value={taskToEdit.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Task Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  rows={3}
                  placeholder="Enter task description"
                  value={taskToEdit.description}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Status</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="status"
                    id="not-started"
                    value="not-started"
                    checked={taskToEdit.status === "not-started"}
                    onChange={handleStatusChange}
                  />
                  <label className="form-check-label" htmlFor="not-started">Not-Started</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="status"
                    id="in-progress"
                    value="in-progress"
                    checked={taskToEdit.status === "in-progress"}
                    onChange={handleStatusChange}
                  />
                  <label className="form-check-label" htmlFor="in-progress">In-Progress</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="status"
                    id="completed"
                    value="completed"
                    checked={taskToEdit.status === "completed"}
                    onChange={handleStatusChange}
                  />
                  <label className="form-check-label" htmlFor="completed">Completed</label>
                </div>
              </div>
              <button type="submit" className="btn btn-success">Update Task</button>
            </>
          )}
          {taskToEdit === null && taskId && (
            <p className="text-danger">Task with ID {taskId} not found.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default EditTaskForm;
