import React , { useState,useEffect}  from 'react'
import '../CSS/Qustionnaire.css'
import AnswerList from './AnswersList';
import Question from './Question';
const QnA = (props) =>{
    let qData=props.questionData;

    const handleCallback = (childData) =>{
        props.parentCallback({qid:props.questionData.QId,answerData:childData})
    }

    return(
        <div className='qna'>
            <Question question={qData.The_Question}/>
            <AnswerList qid={qData.QId} qType={qData.QuestionType} answerNum={qData.AnswersNum} parentCallback={handleCallback}/>
        </div>
    )
}
export default QnA ;