const Dashboard: React.FC = () => {
  const { tasks } = useContext(TasksContext);

  return (
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
  );
};

export default Dashboard;
