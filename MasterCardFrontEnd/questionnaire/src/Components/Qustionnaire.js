import React , { useState, useEffect}  from 'react'
import '../CSS/Qustionnaire.css'
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
    const getQustionsNum = () =>{
        return 2
    }

    const postAnswers = () =>{
        alert("Post")
    }

    const qustionsNum = getQustionsNum();
    //getQustionsNum();
    const handleCallback = (childData) =>{
        console.log("Qustionnaire ",childData);
        ansArr = childData;
        console.log("Size ", Object.keys(ansArr).length);
        console.log("qUSTIONS NUM ",qustionsNum);
        setBtn((Object.keys(ansArr).length == qustionsNum)? <Button variant="success" onClick={postAnswers}>Submit</Button> :   <></>)
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