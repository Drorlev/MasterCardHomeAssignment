import React , { useState, useEffect}  from 'react'
import '../CSS/Qustionnaire.css'
import url from './Url.js';
import {useLocation} from "react-router-dom";
import QuestionsList from './QuestionsList';
import { Button, ProgressBar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Qustionnaire = () =>{
    const { state } = useLocation();
    const [btn, setBtn] = useState(<></>);
    const [progBar, setProgBar] = useState(0);
    let ansArr=[];


    //get num of questions
    const getQustionsAmount = () =>{
        fetch(url+"api/Questions/getQuestionsAmount", {
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
                return result
              },
              (error) => {
                console.log("err post=", error);
                });
    }

    const postAnswers = () =>{
        alert("Post")
    }

    const qustionsNum = getQustionsAmount();
    
    //get data for childs components
    const handleCallback = (childData) =>{
        ansArr = childData;
        
        //Toggle button visibility
        setBtn((Object.keys(ansArr).length == qustionsNum)? <Button variant="success" onClick={postAnswers}>Submit</Button> :   <></>)
        
        //Sets ProgressBar size
        setProgBar((Object.keys(ansArr).length / qustionsNum)*100)
    }
    
    return (
        <div className='Home'>
            <div className='progBar'>
            <ProgressBar now={progBar} active="true"/>
            </div>
            <QuestionsList QustionnaireId={JSON.parse(state)} parentCallback={handleCallback}/>
            {btn}
        </div>
    )
}

export default Qustionnaire;