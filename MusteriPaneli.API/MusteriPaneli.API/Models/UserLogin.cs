﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MusteriPaneli.API.Models
{
    public class UserLogin
    {
        [Key]
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
