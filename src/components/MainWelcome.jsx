import React from 'react'
import Image from '../assets/images/to-do-img.avif'
import { Link } from 'react-router-dom'

export const MainWelcome = () => {
  return (
    <>
        <div className='boxMainWelcome'>
            <p className='txtMainOne'>Bienvenido a tu página To Do List.</p>
            <p className='txtMainTwo'>Aqui podrás registrar tus tareas, leerlas, editarlas y borrarlas.</p>
            <img className='imgMainWelcome' src={Image} alt="Lista to do" />
            <Link to="/todo"className='btnMainWelcome'>Comenzar</Link>
        </div>
    </>
  )
}
