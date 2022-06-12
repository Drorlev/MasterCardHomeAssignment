import React , { useState, useEffect}  from 'react'
import '../CSS/Qustionnaire.css'
import url from './Url.js';
import {useLocation} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import QuestionsList from './QuestionsList';
import { Button, ProgressBar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Qustionnaire = () =>{
    const { state } = useLocation();
    const [btn, setBtn] = useState(<></>);
    const [progBar, setProgBar] = useState(0);
    const navigate = useNavigate();
    let ansArr=[];

    let qustionsNum;

    const navigateToScore = () =>{
      navigate('/score', { state: state });
    }


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
                console.log("############## Q amount ",result);
                qustionsNum = result;
              },
              (error) => {
                console.log("err post=", error);
                });
    }

    const postAnswers = () =>{
        let postedList = [];
        console.log("in postBtn ");
        for (const key in ansArr) {
            console.log(ansArr[key]);
            console.log(ansArr[key].answerArr);
            ansArr[key].answerArr.map(ans=>{
              const answered = {
                QId: key,
                AId: ans,
                Comment: ansArr[key]?.comment,
                QustionnaireID:state,
              }
              postedList.push(answered);
            })
        }
        console.log(postedList);

        ////Fetch
        fetch(url+"api/answers/", {
          method: 'POST',
          body: JSON.stringify(postedList),
          headers: new Headers({
            'Content-type': 'application/json; charset=UTF-8', //very important to add the 'charset=UTF-8'!!!!
            'Accept': 'application/json; charset=UTF-8'
          })
        })
          .then(res => {
            console.log('res=', res);
            return res.json()
          })
          .then(
            (result) => {
              navigateToScore();
            },
            (error) => {
              console.log("err post=", error);
            });
    }

    getQustionsAmount();
   
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