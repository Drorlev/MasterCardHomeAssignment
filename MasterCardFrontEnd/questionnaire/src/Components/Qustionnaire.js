import React from 'react';
import '../CSS/Qustionnaire.css'
import {useLocation} from "react-router-dom";
import QuestionsList from './QuestionsList';
const Qustionnaire = () =>{
    const { state } = useLocation();
    const postAnswers = () =>{

    }
    const getDataFromLS = () =>{
        var retrievedObject = localStorage.getItem(1);
        console.log("From ls ",JSON.parse(retrievedObject));
    }
    getDataFromLS()
    return (
        <div className='Home'>
            <QuestionsList QustionnaireId={JSON.parse(state)}/>
        </div>
    )
}

export default Qustionnaire;