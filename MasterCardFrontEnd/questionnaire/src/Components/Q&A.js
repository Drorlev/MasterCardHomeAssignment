import React , { useState,useEffect}  from 'react'
import '../CSS/Qustionnaire.css'
import AnswerList from './AnswersList';
import Question from './Question';
const QnA = (props) =>{
    const [a, setA] = useState([])
    /*
    const getDataFromChild = (data) =>{
        console.log("AnswerList Data", data);
        //let key =props.qid
        setA({data})
    }
    */
    let qData=props.questionData;
    return(
        <div className='qna'>
            <Question question={qData.The_Question}/>
            <AnswerList qid={qData.QId} qType={qData.QuestionType} answerNum={qData.AnswersNum} />
            {//console.log(" Q&A COMP ",a)
            }
        </div>
    )
}
export default QnA ;