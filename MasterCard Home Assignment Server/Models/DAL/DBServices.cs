using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Configuration;

namespace MasterCard_Home_Assignment_Server.Models.DAL
{
    public class DBServices
    {
        static List<Answer> alist = new List<Answer>(); //would be not needed
        
        public SqlDataAdapter da;
        public DataTable dt;

        public DBServices() { }

        // This method creates a connection to the database according to the connectionString name in the web.config 
        public SqlConnection connect(String conString)
        {

            // read the connection string from the configuration file
            string cStr = WebConfigurationManager.ConnectionStrings[conString].ConnectionString;
            SqlConnection con = new SqlConnection(cStr);
            con.Open();
            return con;
        }

        private SqlCommand CreateCommand(String CommandSTR, SqlConnection con)
        {

            SqlCommand cmd = new SqlCommand(); // create the command object

            cmd.Connection = con;              // assign the connection to the command object

            cmd.CommandText = CommandSTR;      // can be Select, Insert, Update, Delete 

            cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

            cmd.CommandType = System.Data.CommandType.Text; // the type of the command, can also be stored procedure

            return cmd;
        }

        public List<Question> GetQuestions()
        {
            List<Question> qlist = new List<Question>();
            qlist.Add(new Question(1, "1+1=?", QType.Multi));
            qlist.Add(new Question(2, "2+1=?", QType.One));

            return qlist;
        }
        public List<Answer> GetAnswers(int qid)
        {
            //has to modify by qid 

            alist.Add(new Answer(1, 1, "1", 50));
            alist.Add(new Answer(1, 2, "3", 50));
            alist.Add(new Answer(1, 3, "4", 0));


            return alist;
        }

        public int GetQuestionsAmount()
        {
            SqlConnection con = null;
            try
            {
                con = connect("DBConnectionString"); // create a connection to the database using the connection String defined in the web config file
                int amount = 0;
                String selectSTR = "select COUNT(qid) as q_amount from Questions";
                SqlCommand cmd = new SqlCommand(selectSTR, con);

                // get a reader
                SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.CloseConnection);

                while (dr.Read())
                {   // Read till the end of the data into a row
                    amount = Convert.ToInt32(dr["q_amount"]);
                }
                return amount;
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }
            finally
            {
                if (con != null)
                {
                    con.Close();
                }

            }
        }

    }
}