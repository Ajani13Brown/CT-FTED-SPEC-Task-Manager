import React from 'react'
import { Container } from 'react-bootstrap'
import LoginButton from '../components/LoginButton'
import Jumbotron from '../components/Jumbotron'

const Login = () => {
  return (
    <>
    <Jumbotron/>
    <Container>
    <h1 className="text-center">Get Started using TaskMaster Now!</h1>
    <p className='text-center'>Are you ready to take control of your day with ease? Introducing TaskMaster,
       the ultimate online task manager designed to streamline your productivity.
        Our intuitive platform lets you effortlessly add tasks with just a few clicks—whether it’s a simple reminder or a detailed project milestone.
         Need to make adjustments? Editing tasks is just as easy; update deadlines, add notes, or change priorities on the fly to keep everything perfectly aligned with your goals.</p>
    <p className='text-center'>Say goodbye to missed deadlines and disorganized to-do lists.
       Sign up or log in now to experience the simplicity and power of TaskMaster.
        With just a click, you'll unlock a world of organized efficiency and ensure every task is on track.
         Start managing your tasks smarter today and watch your productivity soar!</p>
         <div className="d-flex justify-content-center mt-3">
          <LoginButton />
        </div>
    </Container>
    </>
  )
}

export default Login