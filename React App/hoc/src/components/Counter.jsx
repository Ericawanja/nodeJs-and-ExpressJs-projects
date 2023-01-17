import React, { useState } from 'react'

function Counter(props) {
    
    
  return (
    <div>
        <button onClick={props.handleEvent}>Click</button>
        <h2>{props.count}</h2>
    </div>
  )
}

export default Counter