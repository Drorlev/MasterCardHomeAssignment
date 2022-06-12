import React from 'react'
import "../CSS/Home.css"
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

let qustionnaire = 0;
const Start = () =>{
    const navigate = useNavigate();
    const startQ = () => {
        qustionnaire++;
		navigate('/qustionnaire', { state: JSON.stringify(qustionnaire) });
        
    }

    return(
        <div>
            <Button variant="primary" onClick={startQ}>Start</Button>
        </div>
    )
}

export default Start


