import React from 'react'
import pen from '../assets/images/pen-to-square-solid.svg'
import trash from '../assets/images/trash-solid.svg'
import '../styles/style.css'

const Activitie = (props) => {
  return (
    <>
        <div className='boxActivitie'>
            <p>{props.text}</p>
            <div className='boxIcons'>
              <button>
                <img src={pen} alt='cambia tu actividad'/>
              </button>
              <button>
               <img src={trash} alt='borra esa actividad de la lista'/>
              </button>
            </div>
        </div>
    </>
  )
}

export default Activitie