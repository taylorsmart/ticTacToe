import React from 'react';

const  CowRows  = (props) => {

  return (
    <div>
      <div onClick={() => {props.nameClick(props.cow.name,props.cow.description)}}>{props.cow.name}</div>
      <button onClick={() => {props.deleteClick(props.cow.id)}}>Delete cow</button>
      <button type="text" onClick={() =>{props.editClick(props.cow.id,'edit')}}>Edit Cow</button>
    </div>)
}




export default CowRows