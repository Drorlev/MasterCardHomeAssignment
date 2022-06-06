import React , { useState}  from 'react'
import MultiAnswers from './MultiAnswers'
import MultiQ from './MultiQ';
let answers;
const AnswerList = (props) =>{
    const [q, setQ] = useState([])

    const handleCallback = (childData) =>{
        console.log("AnswerList Data", childData);
        setQ(childData)
        props.parentCallback(childData)
    }

    if(props.qType == 0){
        answers =<MultiQ qid={props.qid} answerNum={props.answerNum} parentCallback = {handleCallback}/>
    }else{
        answers = <input id='answer' type="text" name="name" />
    }
    return(
        <div> 
            {answers}
        </div>
    )
}

export default AnswerList;