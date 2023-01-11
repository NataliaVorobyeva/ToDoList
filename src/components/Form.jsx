import React from 'react'

const Form = () => {
  return (
    <>
   <form>
        <input className='inActivity' type='text' placeholder='introduzca actividad'></input>

        <button className='btnAgregar' type='submit'>agregar</button>
    </form> 
    </>
  )
}

export default Form