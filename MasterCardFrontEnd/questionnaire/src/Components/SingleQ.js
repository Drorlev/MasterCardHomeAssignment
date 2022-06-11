import React, {useEffect,useState, useRef} from "react";
import url from './Url.js';
import '../CSS/Answers.css'

const SingleQ = (props) =>{
    const [answers, setAnswers] = useState("There is no answers");

    let answerDict = [];

    const handleChange = (e) =>{
        console.log(e.target.value);
        answerDict[0] = e.target.value
        props.parentCallback({answerArr:answerDict})
    }

    
    const getClosedAnswers = () =>{
        fetch(url+"api/answers/?qid="+props.qid, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8',
                'Accept': 'application/json; charset=UTF-8'
            })
            })
            .then(res => {
                return res.json()
            })
            .then(
                (result) => {
                    let ansList = result.map(a =>
                        <div key={a.AId}><input className='checkbox' type="radio" name={"radio"+props.qid} value={a.AId} onChange={handleChange}/><label>{a.The_Answer}</label></div>
                    )
                    answerDict = [];
                    setAnswers(ansList)
                },
                (error) => {
                console.log("err post=", error);
                });
    }
    



    useEffect(() => {
        getClosedAnswers();
      },[]);
    return(
        <div className="rowDiv">
            {answers}
        </div>
    )
}

export default SingleQ;