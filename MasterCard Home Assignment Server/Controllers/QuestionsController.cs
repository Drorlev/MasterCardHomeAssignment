using MasterCard_Home_Assignment_Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MasterCard_Home_Assignment_Server.Controllers
{
    [RoutePrefix("api/Questions")]
    public class QuestionsController : ApiController
    {
        // GET api/<controller>/
        public IHttpActionResult Get()
        {
            try
            {
                List<Question> questionlist = new Question().GetQuestions();
                return Ok(questionlist);
            }
            catch (Exception ex)
            {
                //return BadRequest(ex.Massage);
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        [Route("getQuestionsAmount")]
        public IHttpActionResult GetQAmount()
        {
            try
            {
                Question q = new Question();
                int amount = q.GetAmount();
                return Ok(amount);
            }
            catch (Exception ex)
            {
                //return BadRequest(ex.Massage);
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }
        // POST api/<controller>
        public void Post([FromBody] string value)
        {
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