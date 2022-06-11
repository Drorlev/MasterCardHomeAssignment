import React , { useState,useEffect}  from 'react'
import QnA from './Q&A';
import url from './Url.js';
import '../CSS/Qustionnaire.css'

const QuestionsList = (props) =>{
    const [qnAlist, setQnAList] = useState("There is no Questions");
    let qnAarr={}


    const handleCallback = (childData) =>{
      let answers = childData.answerData.answerArr;
      (answers.length == 0)? delete qnAarr[childData.qid] : qnAarr[childData.qid] = childData.answerData ;
      props.parentCallback(qnAarr)
  }

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
                let questionsList =result.map(q =>
                    <QnA key={q.QId} questionData={q} parentCallback={handleCallback}/>
                )
                setQnAList(questionsList);
              },
              (error) => {
                console.log("err post=", error);
              });
    }

    useEffect(() => {
        getQuestionsData();
      },[props]);
    return(
        <div className='scroll'>
           {qnAlist}
        </div>
    )
}

export default QuestionsList;