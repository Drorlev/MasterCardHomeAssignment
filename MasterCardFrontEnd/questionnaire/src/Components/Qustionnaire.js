import React from 'react';
import '../CSS/Qustionnaire.css'
import {useLocation} from "react-router-dom";
import QuestionsList from './QuestionsList';
const Qustionnaire = ({ route, navigation }) =>{
    const { state } = useLocation();
    return (
        <div className='Home'>
            <QuestionsList QustionnaireId={JSON.parse(state)}/>
        </div>
    )
}

export default Qustionnaire;