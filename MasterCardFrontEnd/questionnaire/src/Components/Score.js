import React , { useState,useEffect}  from 'react'
import "../CSS/Home.css"
import url from './Url.js';
import {useLocation} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap'

const Score = () =>{
    const { state } = useLocation();
    const [score, setScore] = useState(0)
    const navigate = useNavigate();

    const getScores = () =>{
        fetch(url+"api/Scores?qid="+state, {
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
                setScore(result)
              },
              (error) => {
                console.log("err post=", error);
                });
    }

    const goHome = () =>{
        navigate('/');
    }

    useEffect(() => {
        getScores();
      },[state]);
    return(
        <div className='Home'>
            <div className='score'>Your score is {score}</div>
            <br/>
            <Button variant="primary" onClick={goHome}>Go to Start</Button>
        </div>
    )
}

export default Score;