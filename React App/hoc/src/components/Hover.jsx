import React, { useState } from 'react'

function Hover(props) {
   
   
  return (
    <div>
        <h1 onMouseOver={props.handleEvent}>On mouse over element {props.count}</h1>
    </div>
  )
}

export default Hover