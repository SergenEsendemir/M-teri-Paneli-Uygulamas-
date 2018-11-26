using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MusteriPaneli.API.Models;

namespace MusteriPaneli.API.Data
{
    public class AppRepository : IAppRepository
    {
        private DataContext _context;

        public AppRepository(DataContext context)
        {
            _context = context;
        }

        public async Task<Customer> Add(Customer customer)
        {
            await _context.Customers.AddAsync(customer);
            await _context.SaveChangesAsync();
            return customer;
        }

        public void Delete(int? id)
        {
            var customer = _context.Customers.Where(x => x.M_No == id).FirstOrDefault();
            _context.Customers.Remove(customer);
            _context.SaveChanges();
        }

        public async Task<Customer> Update(Customer customer)
        {
            var UpdatedCustomer = _context.Customers.Where(x => x.M_No == customer.M_No).FirstOrDefault();
            if (UpdatedCustomer == null)
            {
                return null;
            }
            if(customer.M_No!=UpdatedCustomer.M_No)
            {
                return null;
            }
            customer.M_No = UpdatedCustomer.M_No;
            _context.Customers.Remove(UpdatedCustomer);
            await _context.Customers.AddAsync(customer);
            _context.SaveChanges();
            return customer;
        }

        public List<Customer> GetCustomers()
        {
            var customer = _context.Customers.ToList();
            return customer;
        }


        public Customer GetCustomer(int id)
        {
            var customer =  _context.Customers.Where(c => c.M_No == id).FirstOrDefault();
            return customer;
        }
    }
}
