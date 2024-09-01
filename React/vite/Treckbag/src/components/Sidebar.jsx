import React from 'react'
import AddItemForm from './AddItemForm'
import ButtonGroup from './ButtonGroup'

export default function Sidebar({handleAdditem}) {
  return (
    <div className='sidebar'>
      <AddItemForm handleAdditem={handleAdditem}/>
      <ButtonGroup />
    </div>
  )
}
