using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MasterCard_Home_Assignment_Server.Models.DAL
{
    public class DBServices
    {
        public DBServices(){ }

        public List<Question> GetQuestions()
        {
            List<Question> qlist = new List<Question>();
            qlist.Add(new Question(1, "1+1=?", QType.Close, 1));
            qlist.Add(new Question(2, "2+1=?", QType.Open, 1));
            
            return qlist;
        }
        public List<Answer> GetAnswers(int qid)
        {
            //has to modify by qid 
            List<Answer> alist = new List<Answer>();
            alist.Add(new Answer(1, 1, "1", 50));
            alist.Add(new Answer(1, 2, "3", 0));
            alist.Add(new Answer(1, 3, "4", 0));
            

            return alist;
        }
    }
}