using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MusteriPaneli.API.Models
{
    public class Customer
    {
        [Key]
        public int M_No { get; set; }
        public string MusteriAdi { get; set; }
        public string MusteriSoyadi { get; set; }
        public string Musteri_TC { get; set; }
        public string Musteri_Tel { get; set; }
        public string Musteri_Adres { get; set; }
    }
}
