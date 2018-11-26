using MusteriPaneli.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusteriPaneli.API.Data
{
    public interface IAppRepository
    {
        Task<Customer> Add(Customer customer);
        void Delete(int? id);
        Task<Customer> Update(Customer customer);
        Customer GetCustomer(int id);

        List<Customer> GetCustomers();
    }
}
