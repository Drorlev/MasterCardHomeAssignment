using MasterCard_Home_Assignment_Server.Models.DAL;
using System.Collections.Generic;


namespace MasterCard_Home_Assignment_Server.Models
{
    public class Answered : Answer
    {
        public string Comment { get; set; }
        public int QustionnaireID { get; set; }
        
        public void Insert(List<Answered> alist)
        {
            DBServices ds = new DBServices();
            ds.Insert(alist);
        }
    }
}