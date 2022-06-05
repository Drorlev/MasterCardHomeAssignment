import React , { useState,useEffect}  from 'react'
import url from './Url.js';
import '../CSS/Answers.css'


let answerDict = []; 
const ClosedAnswers = (props) =>{
    const [answers, setAnswers] = useState("There is no answers")
    console.log("props.answerNum ", props.answerNum);
    const handleChange = (e) => {
        const { value, checked } = e.target;
        console.log(value);
        console.log(checked);
        let cnt=0;
        console.log("at start",answerDict);
        for (let index = 0; index < answerDict.length; index++) {
            const object = answerDict[index];
            console.log("handleChange "+object.key,object.val);
            if (object.key == value) {
                object.val = checked
            }
            console.log("handleChange after cahnge"+object.key,object.val);
            if(object.val){
                cnt++
            }
            if(cnt > props.answerNum || cnt == 0)
            {
                alert("Please select just " + props.answerNum + " answers")
                props.upliftData([])
            }else{
                props.upliftData(answerDict)
            }
        }
        console.log("at end",answerDict);
        
    };



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
                    <div key={a.aid}><input className='checkbox' type="checkbox" name="myCheckbox" value={a.The_Answer} onChange={handleChange}/><label>{a.The_Answer}</label></div>
                )
                console.log(ansList);
                
                result.map(a => answerDict.push({key:a.The_Answer , val:false}))
                console.log("answerDict ",answerDict);
                setAnswers(ansList)
              },
              (error) => {
                console.log("err post=", error);
              });
    }
    useEffect(() => {
        getClosedAnswers();
        answerDict = [];
      },[]);
    return(
        <div>
            {answers}
        </div>
    )
}

export default ClosedAnswers;