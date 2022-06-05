import React from 'react';
import '../CSS/Qustionnaire.css'
import {useLocation} from "react-router-dom";
import Questions from './Questions';
const Qustionnaire = ({ route, navigation }) =>{
    const { state } = useLocation();
    return (
        <div className='Home'>
            <Questions QustionnaireId={JSON.parse(state)}/>
        </div>
    )
}

export default Qustionnaire;