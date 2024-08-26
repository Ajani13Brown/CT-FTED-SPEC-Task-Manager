import { useContext } from "react";
import TasksContext from "../Context/Tasklist";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import { Container } from "react-bootstrap";





const Dashboard: React.FC = () => {
  const { tasks } = useContext(TasksContext);

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
                  </li>
              ))}
          </ul>
      </div>
          </Container>

        </>
  );
};

export default Dashboard;
