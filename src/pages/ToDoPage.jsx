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
const markDone = (id) => {
  let newTask = toDo.map( task => {
      if( task.id === id ) {
      return ({ ...task, status: !task.status })
   } 
      return task
    })
     setToDo(newTask)
     setToDo(toDo.map(task => task.id === id 
    ? ({ ...task, status: !task.status }) 
    : (task) 
  ))

}
const cancelUpdate = () => {
  setUpdateData('')
}


const changeHolder = (e) => {

   let newEntry = {
     id: updateData.id,
     title: e.target.value,
     status: updateData.status ? true : false
   }
   setUpdateData(newEntry)

  
  setUpdateData({...updateData, title: e.target.value})

}

const updateTask = () => {
  
   let filterRecords = [...toDo].filter( task => task.id !== updateData.id )
   let updatedObject = [...filterRecords, updateData]
   setToDo(updatedObject)

  let removeOldRecord = [...toDo].filter(task => task.id !== updateData.id)
  setToDo([
    ...removeOldRecord, 
    updateData
  ])
  
  setUpdateData('')

}






export default ToDoPage