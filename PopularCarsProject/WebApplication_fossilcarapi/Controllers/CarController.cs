using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication_fossilcarapi.DataHandlers;
using WebApplication_fossilcarapi.Models;

namespace WebApplication_fossilcarapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private MockData datahandler;

        public CarController(MockData dataHandler) {
            this.datahandler = dataHandler;
        }

        [HttpGet]
        public Car[] AllCars()
        {
            return datahandler.GetAllCars();
        }
    }
}
