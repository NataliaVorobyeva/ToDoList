import React from 'react'
import CallAxios from '../services/CallAxios'

const Form = ({ addedInput, setAddedInput }) => {

  const handleInputChange = (event) => {
    setAddedInput({
      ...addedInput,
      [event.target.name]: event.target.value
    })
  }
 

  const handleSubmit = (event) => {
    event.preventDefault();
    CallAxios().submit(addedInput)
    ;
 


  }

  return (
    <>
   <form onSubmit={handleSubmit}>
        <div className='boxForm'>
          <input className='inActivity' type='text' name='text' placeholder='introduzca actividad' onChange={handleInputChange} required ></input>
          <button className='btnAgregar' type='submit'>agregar</button>
        </div>
    </form> 
    </>
  )
}

export default Form