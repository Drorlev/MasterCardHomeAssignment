import React , { useState,useEffect}  from 'react'
import '../CSS/Qustionnaire.css'
import {useLocation} from "react-router-dom";
import QuestionsList from './QuestionsList';
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const Qustionnaire = () =>{
    const { state } = useLocation();
    const [btn, setBtn] = useState(<></>);
    let ansArr=[];
    const postAnswers = () =>{
        alert("Post")
    }
    const handleCallback = (childData) =>{
        console.log("Qustionnaire ",childData);
        ansArr = childData;
        console.log("Size ", Object.keys(ansArr).length);
        setBtn((Object.keys(ansArr).length == 2)? <Button variant="success" onClick={postAnswers}>Submit</Button> :   <></>)
    }
    return (
        <div className='Home'>
            <QuestionsList QustionnaireId={JSON.parse(state)} parentCallback={handleCallback}/>
            {btn}
        </div>
    )
}

export default Qustionnaire;