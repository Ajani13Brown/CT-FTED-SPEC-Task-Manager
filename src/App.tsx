import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './views/Login'
import Home from './views/Home'
import Dashboard from './views/Dashboard'
import EditTask from './views/EditTask'
import CreateTask from './views/CreateTask'
import AuthenticationGuard from './components/AuthenticationGuard'
import TasksContext, { Task } from './Context/Tasklist'
import DeleteTask from './views/DeleteTask'


  


const App = () => {

  const [tasks, setTaskList] = useState<Task[]>([
    {
        id: '1',
        title: 'Write Report',
        description: 'Complete the annual report.',
        status: 'not-started'
    },
    {
        id: '2',
        title: 'Update Website',
        description: 'Add new features to the website.',
        status: 'in-progress'
    }
]);


  return (
    <TasksContext.Provider value={{ tasks, setTaskList }}>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/dash" element={<AuthenticationGuard component={Dashboard}/>}/>
      <Route path="/edit" element={<AuthenticationGuard component={EditTask}/>}/>
      <Route path="/create" element={<AuthenticationGuard component={CreateTask}/>}/>
      <Route path="/delete" element={<AuthenticationGuard component={DeleteTask}/>}/>
    </Routes>
    </TasksContext.Provider>

  )
}

export default App