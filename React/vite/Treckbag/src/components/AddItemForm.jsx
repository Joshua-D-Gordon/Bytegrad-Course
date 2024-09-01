import React from 'react'
import Button from './Button'
import { useState } from 'react'
import { useRef } from 'react';

export default function AddItemForm({handleAddItem}) {

  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation
    if(!itemText){
        alert(" item can't be emepty ");
        inputRef.current.focus();
        return;
    }

    const newItem = {
        id: new Date().getTime(),
        name: itemText,
        packed: false
    };

    handleAddItem(newItem);
    setItemText("");
}

  return (
    <form onSubmit={handleSubmit}>
        <h2>Add an item</h2>
        <input 
        ref={inputRef}
        value={itemText}
        autoFocus={true}
         onChange={(e)=>{
            setItemText(e.target.value);
        }}/>
        <Button>Add to list</Button>
    </form>
  )
}
