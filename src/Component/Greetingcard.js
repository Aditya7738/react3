import React from 'react'

function Greetingcard(props) {
    const styling = {
        color : props.color,
        
    }

    const substyling = {
        color : props.color2,
        
    }

  return (
    
    <div>
      
      <h1 style={styling}>{props.title}</h1>
      <h2 style={substyling}>{props.birthdayperson}</h2>
    </div>
   
  )
}

export default Greetingcard
