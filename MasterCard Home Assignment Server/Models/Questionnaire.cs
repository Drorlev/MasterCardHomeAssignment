using MasterCard_Home_Assignment_Server.Models.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MasterCard_Home_Assignment_Server.Models
{
    public class Questionnaire
    {
        public int Id { get; set; }
        public int Score { get; set; }

        public int GetScore(int qid)
        {
            DBServices ds = new DBServices();
            return ds.GetScore(qid);
        }
    }
}