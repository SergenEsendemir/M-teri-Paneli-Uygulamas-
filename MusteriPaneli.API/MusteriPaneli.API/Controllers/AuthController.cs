using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using MusteriPaneli.API.Data;
using MusteriPaneli.API.Dtos;
using MusteriPaneli.API.Models;

namespace MusteriPaneli.API.Controllers
{
    [Produces("application/json")]
    [Route("api/Auth")]
    public class AuthController : ControllerBase
    {
        private IAuthRepository _authRepository;

        public AuthController(IAuthRepository authRepository)
        {
            _authRepository = authRepository;
        }

        [HttpPost("register")]
        public async Task<IActionResult>  Register([FromBody]UserForRegisterDto userForRegisterDto)
        {
            if(await _authRepository.UserExists(userForRegisterDto.UserName))
            {
                return Ok(202);
            }
            if(!ModelState.IsValid)
            {
                return Ok(201);
            }
            var userToCreate = new UserLogin
            {
                UserName = userForRegisterDto.UserName,
                Password = userForRegisterDto.Password
            };
            var createdUser = await _authRepository.Register(userToCreate);
            return Ok(200);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody]UserForLoginDto userForLoginDto)
        {
            var user = await _authRepository.Login(userForLoginDto.UserName, userForLoginDto.Password);
            if(user==null)
            {
                return Ok(201);
            }
            if (user.Password != userForLoginDto.Password)
            {
                return Ok(201);
            }
            return Ok(200);

        }
    }
}
