using MasterCard_Home_Assignment_Server.Models.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MasterCard_Home_Assignment_Server.Models
{
    public class Answer
    {
        public int QId { get; set; }
        public int AId { get; set; }
        public string The_Answer{ get; set; }
        public int Score { get; set; }
        public Answer(){}

        public Answer(int qId, int aId, string the_Answer, int score)
        {
            QId = qId;
            AId = aId;
            The_Answer = the_Answer;
            Score = score;
        }

        public List<Answer> GetAnswers(int qid)
        {
            DBServices ds = new DBServices();
            return ds.GetAnswers(qid);
        }
    }
}