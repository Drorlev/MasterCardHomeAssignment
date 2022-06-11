using MasterCard_Home_Assignment_Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MasterCard_Home_Assignment_Server.Controllers
{
    public class AnswersController : ApiController
    {
        // GET api/<controller>/5
        public IHttpActionResult Get(int qid)
        {
            try
            {
                List<Answer> answerlist = new Answer().GetAnswers(qid);
                return Ok(answerlist);
            }
            catch (Exception ex)
            {
                //return BadRequest(ex.Massage);
                return Content(HttpStatusCode.BadRequest, ex);
            }

        }

        // POST api/<controller>
        public IHttpActionResult Post([FromBody] List<Answered> alist)
        {
            try
            {
                Answered answered = new Answered();
                answered.Insert(alist);
                return Ok("ok");
            }
            catch (Exception ex)
            {
                //return BadRequest(ex.Massage);
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}