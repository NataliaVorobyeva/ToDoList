import React from 'react'
import Editar from '../assets/images/lapiz.png'
import Borrar from '../assets/images/tugurio.png'

export const ListToDos = () => {
  return (
    <>
        <div className='boxListToDos'>
            <p className='txtListItem'>Tarea 1</p>
            <img className='imgEditar' src={Editar} alt="boton para editar" />
            <img className='imgBorrar' src={Borrar} alt="boton para editar" />
        </div>
    </>
  )
}
