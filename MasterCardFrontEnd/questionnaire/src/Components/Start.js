import React from 'react'
import "../CSS/Home.css"
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Start = () =>{

    const navigate = useNavigate();

    const startQ = () => {
		navigate('/qustionnaire')
    }

    return(
        <div>
            <Button variant="primary" onClick={startQ}>Start</Button>
        </div>
    )
}

export default Start


