import React from 'react'
import Jumbotron from '../components/Jumbotron'
import Navbar from '../components/Navbar'
import EditTaskForm from '../components/EditTaskForm'

const EditTask = () => {
  return (
    <>
    <Navbar/>
    <Jumbotron/>
    <h1>EditTask</h1>
    <EditTaskForm/>
    </>
  )
}

export default EditTask