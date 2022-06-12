using MasterCard_Home_Assignment_Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MasterCard_Home_Assignment_Server.Controllers
{
    public class ScoresController : ApiController
    {
        // GET api/<controller>
        public IHttpActionResult Get(int qid)
        {
            try
            {
                Questionnaire questionnaire = new Questionnaire();
                int score = questionnaire.GetScore(qid);
                return Ok(score);
            }
            catch (Exception ex)
            {
                //return BadRequest(ex.Massage);
                return Content(HttpStatusCode.BadRequest, ex);
            }

        }
    }
}