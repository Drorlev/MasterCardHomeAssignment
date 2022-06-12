using MasterCard_Home_Assignment_Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace MasterCard_Home_Assignment_Server.Controllers
{
    [EnableCors("*", "*", "*")]
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
        [HttpGet]
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
    }
}