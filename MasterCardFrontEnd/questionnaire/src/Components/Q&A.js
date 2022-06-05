import React , { useState,useEffect}  from 'react'
import '../CSS/Qustionnaire.css'
import AnswerList from './AnswersList';
import Question from './Question';
const QnA = (props) =>{
    let qData=props.questionData;
    return(
        <div className='qna'>
            <Question question={qData.The_Question}/>
            <AnswerList qid={qData.QId} qType={qData.QuestionType} answerNum={qData.AnswersNum}/>
        </div>
    )
}
export default QnA ;