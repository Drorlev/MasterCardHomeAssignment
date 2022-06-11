import React , { useState}  from 'react'
import MultiQ from './MultiQ';
import SingleQ from './SingleQ';
let answers;
const AnswerList = (props) =>{
    const [q, setQ] = useState([])

    const handleCallback = (childData) =>{
        setQ(childData)
        props.parentCallback(childData)
    }

    if(props.qType == 0){
        answers =<MultiQ qid={props.qid} answerNum={props.answerNum} parentCallback={handleCallback}/>
    }else{
        answers = <SingleQ qid={props.qid} parentCallback={handleCallback}/>
    }
    return(
        <div> 
            {answers}
        </div>
    )
}

export default AnswerList;