using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using MessageBottle.Model;
using Newtonsoft.Json;


namespace MessageBottle.Controller
{
    [ApiController]
    public class MessageController : ControllerBase
    {
        [Route("api/[controller]")]
        [HttpGet]
        public async Task<string> Get()
        {
            Message output = new Message();
            output.Title = "Title of a message";
            output.Body = "This is the body, lorem lorem bla bla bla";
            string message =  JsonConvert.SerializeObject(output);
            return message;
        }
    }
}