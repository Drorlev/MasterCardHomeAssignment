import React from 'react'
import '../CSS/Qustionnaire.css'

const Question = (props) =>{
    return(
        <div className='question'>
           <h4>{props.question}</h4>
          
        </div>
    )
}

export default Question;