import React from 'react'
import Activitie from './Activitie'
import '../styles/style.css'
import { useState, useEffect } from 'react'
import CallAxios from '../services/CallAxios'

const List = () => {

const [activity, setActivities] = useState([]);
  useEffect(() => {
    CallAxios().get().then(res => {
      setActivities(res.data)
    })
},[])


 function deleteActivity(id){
  CallAxios().trash(id)
  .then(res => {
    setActivities(res.data)
  })
}
    <>
      <ul className='boxList'> 
        {activity.map(item => ( 
          <li key={item.id}> 
              <Activitie text={item.text} deleteActivity={deleteActivity}/>
          </li> ))} 
      </ul>
    </>
  
}

export default List