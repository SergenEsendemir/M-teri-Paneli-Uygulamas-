using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MusteriPaneli.API.Data;
using MusteriPaneli.API.Models;

namespace MusteriPaneli.API.Controllers
{
    [Produces("application/json")]
    [Route("api/Home")]
    public class AppController : Controller
    {
        private IAppRepository _appRepository;

        public AppController(IAppRepository appRepository)
        {
            _appRepository = appRepository;
        }
        [HttpGet]
        [Route("get")]
        public IActionResult GetCustomers()
        {
            var customers =_appRepository.GetCustomers();
            return Ok(customers);
        }
        [HttpPost]
        [Route("add")]
        public IActionResult Add([FromBody]Customer customers)
        {
            _appRepository.Add(customers);
            return Ok(200);
        }

        [HttpPost]
        [Route("delete")]
        public IActionResult Delete([FromBody]int id)
        {
            _appRepository.Delete(id);
            return Ok(200);
        }

        [HttpPost]
        [Route("update")]
        public IActionResult Update([FromBody]Customer customers)
        {
            var custom=_appRepository.Update(customers);
            if(custom==null)
            {
                return BadRequest("Müşteri Bulunamadı!");
            }
            return Ok(customers);
        }
        [HttpPost]
        [Route("getCustomer")]
        public IActionResult GetCustomer([FromBody]int id)
        {
            var customer = _appRepository.GetCustomer(id);
            return Ok(customer);
        }
    }
}