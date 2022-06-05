import React , { useState}  from 'react'
import ClosedAnswers from './ClosedAnswers'
let answers;
const AnswerList = (props) =>{
    const [q, setQ] = useState([])
    const getDataFromChild = (data) =>{
        console.log("AnswerList Data", data);
        //let key =props.qid
        let obj ={qid:props.qid,arr:data} 
        setQ(obj)
        //props.upliftData(obj);
    }
    const fetchAnswer = () =>{
        //would be lsit of answers comps
        answers=<p>many answers</p>
    }
    
    //(props.qType == 1)? fetchAnswer(): answers= <input id='answer' type="text" name="name" />;
    if(props.qType == 1){
        answers = <ClosedAnswers qid={props.qid} answerNum={props.answerNum} upliftData={getDataFromChild}/>
    }else{
        answers = <input id='answer' type="text" name="name" />
    }
    return(
        <div> 
            {answers}
            <h1>Hello </h1>
            {console.log(" AbswerLsit COMP ",q)}
           
        </div>
    )
}

export default AnswerList;