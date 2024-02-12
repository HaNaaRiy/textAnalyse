import React from 'react'

export default function Alert(props) {
    const capitalize = (word) =>{
        word = word.toLowerCase();
        word = word.charAt(0).toUpperCase() + word.slice(1);
        return word;
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
    <strong>{capitalize(props.alert.typ)}: {props.alert.msg}</strong> 
   </div>

  )
}
