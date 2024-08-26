import React, { useContext, useState } from 'react'
import TasksContext, { Task } from '../Context/Tasklist';
import { useNavigate } from 'react-router-dom';

const NewTaskForm = () => {

  const { setTaskList } = useContext(TasksContext);
  const navigate = useNavigate()

  const [newTask, setNewTask] = useState<Task>({
    id: "",
    title: "",
    description: "",
    status: "not-started"
  });

  const handleTitle = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    const newTitle = event.target.value;
    setNewTask(prevTask => ({
      ...prevTask,
      title: newTitle
    }));
  };

  const handleDesc = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    const newDesc = event.target.value;
    setNewTask(prevTask => ({
      ...prevTask,
      description: newDesc
    }));
  };
  const handleId = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    const newId = event.target.value;
    setNewTask(prevTask => ({
      ...prevTask,
      id: newId
    }));
  };

  const handleStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newStatus = event.target.value as "not-started" | "in-progress" | "completed"; // Type assertion
    setNewTask(prevTask => ({
      ...prevTask,
      status: newStatus
    }));
  };
  
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setTaskList(prevList => [...prevList, newTask]);
    
    setNewTask({
      id: "",
      title: "",
      description: "",
      status: "not-started"
    });

    
    navigate('/dash')
  };



  
  return (
    <>
    <div className="container center-form border-5">
  <div className="col-md-6">
    <h2 className="text-center">New Task</h2>
    <p className="lead text-center">Enter details for your new task:</p>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="task-name">Task Name</label>
        <input type="text" className="form-control" id="task-name" placeholder="Enter task name" required onChange={handleTitle} />
      </div>
      <div className="form-group">
        <label htmlFor="task-Id">Id number</label>
        <input type="text" className="form-control" id="task-id" placeholder="Enter a unique Id #" required onChange={handleId} />
      </div>
      <div className="form-group">
        <label htmlFor="description">Task Description</label>
        <textarea className="form-control" id="description" rows={3} placeholder="Enter task description" onChange={handleDesc} />
      </div>
      <div className="form-group">
        <label>Status</label>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="Status" id="not-started" value="not-started" checked={newTask.status === "not-started"} onChange={handleStatus} />
          <label className="form-check-label" htmlFor="not-started">Not-Started</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="Status" id="in-progress"  value="in-progress" checked={newTask.status === "in-progress"} onChange={handleStatus} />
          <label className="form-check-label" htmlFor="In-Progress">In-Progress</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="Status" id="completed" value="completed" checked={newTask.status === "completed"} onChange={handleStatus}/>
          <label className="form-check-label" htmlFor="Completed">Completed</label>
        </div>
      </div>
      <button type="submit" className="btn btn-success">Add Task</button>
    </form>
  </div>
</div>

    </>
  )
}

export default NewTaskForm