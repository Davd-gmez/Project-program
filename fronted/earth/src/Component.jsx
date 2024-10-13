import React, { useState } from 'react'

export default function Component() {
    

  const[data, setData] = useState('');

  const handleChange = (event) => {
    setData(event.target.value);
    
  };

  const botonUno = () => {
    alert(data);
  };

  return (

    <div>

        <input
         type="text"
        placeholder="Ingresa tus datos"
        onChange={handleChange}
         />
        <button onClick={botonUno}>CLICK</button>

        </div>
  )
}