import React from 'react'
import Form from '../components/Form'
import Header from '../components/Header'
import List from '../components/List'
import '../styles/toDoPage.css'
import { useState } from 'react'

const ToDoPage = () => {

  const [addedInput, setAddedInput] = useState({text:''})

  return (
    <>
      <Header/>
      <div className="boxToDoPage">
        <Form addedInput={addedInput} setAddedInput={setAddedInput}/>
        <List addedInput={addedInput}/>
      </div>
    </>
    
  )
}

export default ToDoPage