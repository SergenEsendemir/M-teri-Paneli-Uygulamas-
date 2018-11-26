using MusteriPaneli.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusteriPaneli.API.Data
{
    public interface IAuthRepository
    {
        Task<UserLogin> Register(UserLogin user);
        Task<UserLogin> Login(string userName, string password);
        Task<bool> UserExists(string userName);
    }
}
