import React , { useState,useEffect}  from 'react'
import QnA from './Q&A';
import url from './Url.js';

const Questions = (props) =>{
    const [questions, setQuestions] = useState("There is no Questions");

    const getQuestionsData = () =>{
        fetch(url+"api/questions/", {
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
                console.log("fetch realResult= ", result);
                let questionsList =result.map(q =>
                    console.log(q)
                    //<QnA questionData={q}/>
                )
                console.log(questionsList);
                setQuestions(questionsList);
                
              },
              (error) => {
                console.log("err post=", error);
              });
    }

    useEffect(() => {
        getQuestionsData();
      },[props]);
    return(
        <div className='text'>
            {questions}
        </div>
    )
}

export default Questions;