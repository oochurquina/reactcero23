
import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('');
  const onInpuChange =(e)=>{
      setInputValue(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().lenght<=1) return;
    // setCategories(c=>[inputValue,...c]);
    onNewCategory(inputValue.trim())
    setInputValue('');
  }
  return (
    <form onSubmit={onSubmit}>
        <input type="text" placeholder='Buscar Gifs' value={inputValue} onChange={onInpuChange} />
    </form>
  )
}
