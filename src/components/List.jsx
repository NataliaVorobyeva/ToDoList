import React from 'react'
import Activitie from './Activitie'
import '../styles/style.css'
import { useState, useEffect } from 'react'
import CallAxios from '../services/CallAxios'

const List = () => {

const [activity, setActivities] = useState([]);
async function callGet(){
  await CallAxios().get()
  .then(res => {
    setActivities(res.data)
  })
}
  useEffect(() => {callGet()},[])

 async function deleteActivity(id){
  await CallAxios().trash(id)
  await CallAxios().get()
  }

return(
    <>
      <ul className='boxList'> 
        {activity.map(item => ( 
          <li key={item.id}> 
              <Activitie text={item.text} deleteActivity={deleteActivity} id={item.id}/>
          </li> ))} 
      </ul>
    </>
)}
export default List