import React from 'react'
import Form from '../components/Form'
import Header from '../components/Header'
import List from '../components/List'
import '../styles/toDoPage.css'

const ToDoPage = () => {
  return (
    <>
      <Header/>
      <div className="boxToDoPage">
        <Form />
        <List/>
      </div>
    </>
    
  )
}

export default ToDoPage