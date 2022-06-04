using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MasterCard_Home_Assignment_Server.Models.DAL
{
    public class DBServices
    {
        public DBServices(){ }

        public Question GetQuestion(int qid)
        {
            List<Question> qlist = new List<Question>();
            qlist.Add(new Question(1, "1+1=?", QType.Open, 1));
            qlist.Add(new Question(2, "2+1=?", QType.Open, 1));
            foreach (var q in qlist)
            {
                if(q.QId == qid)
                {
                    return q;
                }
            }
            return new Question();
        }
    }
}