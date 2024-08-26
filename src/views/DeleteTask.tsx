import React, { useContext } from 'react'
import { Button, Container } from 'react-bootstrap'
import Jumbotron from '../components/Jumbotron'
import Navbar from '../components/Navbar'
import TasksContext from '../Context/Tasklist'



const DeleteTask: React.FC = () => {
    const { tasks, setTaskList } = useContext(TasksContext);
    
    const handleDelete = (id: string) => {
        setTaskList((prevTasks) => prevTasks.filter(task => task.id !== id));
    
    }

  return (
    <>
    <Navbar/>
    <Jumbotron/>


      <Container className = "text-center">
  <div>
      <h1>Task Dashboard</h1>
      <ul>
          {tasks.map(task => (
              <li key={task.id}>
                  <h2>{task.title}</h2>
                  <p>{task.description}</p>
                  <p>Status: {task.status}</p>
                  <Button onClick={()=>handleDelete(task.id)}>Delete</Button>
              </li>
          ))}
      </ul>
  </div>
      </Container>

    </>
  )
}

export default DeleteTask