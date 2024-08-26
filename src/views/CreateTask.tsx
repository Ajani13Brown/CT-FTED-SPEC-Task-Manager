import React from 'react'
import Jumbotron from '../components/Jumbotron'
import Navbar from '../components/Navbar'
import { Button, Container, Form } from 'react-bootstrap'
import NewTaskForm from '../components/NewTaskForm'


const CreateTask = () => {
  return (
    <>
     <style dangerouslySetInnerHTML={{__html: "\n      .center-form {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 100vh;\n      }\n" }} />


    <Navbar/>
    <Jumbotron/>
    <Container className= "align-items center">
    <NewTaskForm/>
    </Container>
    </>
  )
}

export default CreateTask