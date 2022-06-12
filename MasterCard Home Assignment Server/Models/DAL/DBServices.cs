using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Web.Configuration;

namespace MasterCard_Home_Assignment_Server.Models.DAL
{
    public class DBServices
    {
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
            SqlConnection con = null;
            try
            {
                con = connect("DBConnectionString"); // create a connection to the database using the connection String defined in the web config file
                String selectSTR = "select * from Questions";
                SqlCommand cmd = new SqlCommand(selectSTR, con);

                // get a reader
                SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.CloseConnection);

                while (dr.Read())
                {   // Read till the end of the data into a row
                    Question q = new Question();
                    q.QId = Convert.ToInt32(dr["qid"]);
                    q.The_Question = (string)dr["question"];
                    q.QuestionType = (QType)dr["q_type"];
                    qlist.Add(q);
                }
                return qlist;
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

        public List<Answer> GetAnswers(int qid)
        {
            List<Answer> alist = new List<Answer>();
            SqlConnection con = null;
            try
            {
                con = connect("DBConnectionString"); // create a connection to the database using the connection String defined in the web config file
                String selectSTR = "select * from Answers where qid =" + qid;
                SqlCommand cmd = new SqlCommand(selectSTR, con);

                // get a reader
                SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.CloseConnection);

                while (dr.Read())
                {   // Read till the end of the data into a row
                    Answer answer = new Answer();
                    answer.QId = Convert.ToInt32(dr["qid"]);
                    answer.AId = Convert.ToInt32(dr["aid"]);
                    answer.The_Answer = (string)dr["the_Answer"];
                    alist.Add(answer);
                }
                return alist;
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

        public void Insert(List<Answered> alist)
        {
            SqlConnection con;
            SqlCommand cmd = new SqlCommand();

            try
            {
                con = connect("DBConnectionString"); // create the connection
            }
            catch (Exception ex)
            {
                // write to log
                throw (ex);
            }

            BuildInsertCommand(con, cmd, alist);
        }

        private void BuildInsertCommand(SqlConnection con, SqlCommand cmd, List<Answered> alist)
        {

            cmd.Connection = con;
            cmd.CommandTimeout = 10; 
            cmd.CommandType = System.Data.CommandType.Text;

            string cmdText = "";
            


            cmdText += "INSERT INTO Answered (aid,  qid, qustionnaireID, comment) " +
            "Values (@aid,  @qid, @qustionnaireID, @comment)";

            cmd.CommandText = cmdText;
            cmd.Parameters.Add("@qid", SqlDbType.Int);
            cmd.Parameters.Add("@aid", SqlDbType.Int);
            cmd.Parameters.Add("@qustionnaireID", SqlDbType.Int);
            cmd.Parameters.Add("@comment", SqlDbType.NVarChar);
            foreach (var answered in alist)
            {
                string cmt = (answered.Comment == null) ? "" : answered.Comment;

                cmd.Parameters["@comment"].Value = cmt;
                cmd.Parameters["@aid"].Value = answered.AId;
                cmd.Parameters["@qid"].Value = answered.QId;
                cmd.Parameters["@qustionnaireID"].Value = answered.QustionnaireID;

                try
                {
                    int numEffected = cmd.ExecuteNonQuery(); // execute the command

                }
                catch (SqlException Ex)
                {
                    con.Close();
                    throw (Ex);
                }
                catch (Exception ex)
                {
                    con.Close();
                    throw (ex);
                }

            }
            con.Close();
        }

        public int GetScore(int qid)
        {
            int score = 0;
            List<Answer> alist = new List<Answer>();
            Dictionary<int, int> aListDict = new Dictionary<int, int>();
            SqlConnection con = null;
            try
            {
                con = connect("DBConnectionString"); // create a connection to the database using the connection String defined in the web config file

                //sql query which return all the answers
                //that there question has more than one answer
                //q_type = 0
                String selectSTR = "select AD.aid, AD.qid, AD.qustionnaireID, Q.q_type, ANS.score from Answered as AD " +
                                "INNER JOIN Questions as Q " +
                                "ON AD.qid = Q.qid " +
                                "INNER JOIN Answers as ANS " +
                                "ON ANS.aid = AD.aid " +
                                "where AD.qustionnaireID = " + qid + " and Q.q_type = 0";



                SqlCommand cmd = new SqlCommand(selectSTR, con);

                // get a reader
                SqlDataReader dr = cmd.ExecuteReader();

                while (dr.Read())
                {   // Read till the end of the data into a row
                    Answer answer = new Answer();
                    answer.QId = Convert.ToInt32(dr["qid"]);
                    answer.AId = Convert.ToInt32(dr["aid"]);
                    answer.Score = Convert.ToInt32(dr["score"]);
                    alist.Add(answer);
                    if (aListDict.ContainsKey(answer.QId))
                    {
                        aListDict[answer.QId] = 1;
                    }
                    else
                    {
                        aListDict.Add(answer.QId, 0);
                    }
                }

                //calculate which asnwers should get 50% points
                foreach (var ans in alist)
                {
                    score += (aListDict[ans.QId] == 1) ? ans.Score : (ans.Score / 2);
                }
                con.Close();
                SqlConnection con2 = connect("DBConnectionString");
                selectSTR = "select Answered.aid, Answered.qid, Answered.qustionnaireID,Q.q_type, ANS.score from Answered " +
                            "INNER JOIN Questions as Q " +
                            "ON Answered.qid = Q.qid " +
                            "INNER JOIN Answers as ANS " +
                            "ON ANS.aid = Answered.aid " +
                            "where Answered.qustionnaireID = " + qid + " and Q.q_type = 1";

                SqlCommand cmd2 = new SqlCommand(selectSTR, con2);
                dr = cmd2.ExecuteReader(CommandBehavior.CloseConnection);

                while (dr.Read())
                {   // Read till the end of the data into a row
                    score += Convert.ToInt32(dr["score"]);
                }
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

            return score;
        }
    }
}