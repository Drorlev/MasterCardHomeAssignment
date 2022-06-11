using MasterCard_Home_Assignment_Server.Models.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MasterCard_Home_Assignment_Server.Models
{
    public enum QType { Multi, One }
    public class Question
    {
        public int QId { get; set; }
        public string The_Question { get; set; }
        public QType QuestionType { get; set; }
        public Question(int qId, string the_Question, QType questionType)
        {
            QId = qId;
            The_Question = the_Question;
            QuestionType = questionType;
        }

        public Question() { }

        public List<Question> GetQuestions()
        {
            DBServices ds = new DBServices();
            return ds.GetQuestions();
        }

        public int GetAmount()
        {
            DBServices ds = new DBServices();
            return ds.GetQuestionsAmount();
        }

    }
}