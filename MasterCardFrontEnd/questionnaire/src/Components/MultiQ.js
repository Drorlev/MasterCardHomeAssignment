import React, {useEffect,useState, useRef} from "react";
import url from './Url.js';
import '../CSS/Answers.css'

 
const MultiQ = (props) =>{
    const [answers, setAnswers] = useState("There is no answers");
    const inputTxt = useRef(null);
  
    let answerDict = [];

    const handleChange = (e) =>{
      const {value ,checked } = e.target;
      let input = inputTxt.current.value;
      //Empty arr & checked = true
      if(answerDict.length == 0 && checked){
        answerDict.push(value);
      }
      //Empty arr & checked = true
      else if(checked){
        answerDict.push(value);
      }
      //Arr isnt Empty and need to remove a Answer
      else{
        for (let index = 0; index < answerDict.length; index++) {
          const object = answerDict[index];
          answerDict = answerDict.filter(val => val != value);
        }
      }
      props.parentCallback({answerArr:answerDict, comment:input})
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
                    <div key={a.AId}><input className='checkbox' type="checkbox" name="myCheckbox" value={a.AId} onChange={handleChange}/><label>{a.The_Answer}</label></div>
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
            <div><label>Comment: </label>  <input ref={inputTxt} type="text"/></div>
        </div>
    )
}
export default MultiQ;