import React from 'react'

const Form = () => {
  return (
    <>
   <form>
        <div className='boxForm'>
          <input className='inActivity' type='text' placeholder='introduzca actividad'></input>
          <button className='btnAgregar' type='submit'>agregar</button>
        </div>
    </form> 
    </>
  )
}

export default Form