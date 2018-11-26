using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MusteriPaneli.API.Models;

namespace MusteriPaneli.API.Data
{
    public class AuthRepository : IAuthRepository
    {
        private DataContext _context;

        public AuthRepository(DataContext context)
        {
            _context = context;
        }


        public async Task<UserLogin> Login(string userName, string password)
        {
            var user = await _context.UserLogins.FirstOrDefaultAsync(x => x.UserName == userName);

            if (user == null)
            {
                return null;
            }

            if (user.Password!=password)
            {
                return null;
            }
            return user;

        }

        public async Task<UserLogin> Register(UserLogin user)
        {
            await _context.UserLogins.AddAsync(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<bool> UserExists(string userName)
        {
            if(await _context.UserLogins.AnyAsync(x=>x.UserName==userName))
            {
                return true;
            }
            return false;
        }
    }
}
