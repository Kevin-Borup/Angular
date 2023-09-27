using System.Reflection;
using WebApplication_fossilcarapi.Models;

namespace WebApplication_fossilcarapi.DataHandlers
{
    public class MockData
    {
        private Car[] cars = new Car[]
        {
              new Car("Citroën C3", 2268, -27),
              new Car("Peugeot 208", 2107,  -24),
              new Car("Kia Ceed/Xceed",  1750,  -1),
              new Car("Ford Kuga",  1619,  -53),
              new Car("Toyota Yaris",  1515,  -45),
              new Car("VW T-Roc",  1435,  -7),
              new Car("Mercedes-Benz C-klasse",  1361,  -9),
              new Car("Hyundai i10",  1300,  -26),
              new Car("Nissan Qashqai",  1246,  -42),
              new Car("Toyota Yaris Cross",  1114,  100),
              new Car("Toyota Aygo X",  1105,  100),
              new Car("Peugeot 2008",  1067,  -29),
              new Car("Skoda Enyaq",  1044,  284),
              new Car("Hyundai i20",  1043,  3),
              new Car("VW Polo",  1031,  -30),
              new Car("Peugeot 3008",  1028,  -22),
              new Car("Tesla Model Y",  989,  100),
              new Car("VW Taigo",  978,  100),
              new Car("BMW 3-serie",  960,  -50),
              new Car("Opel Corsa",  944,  -53),
              new Car("Toyota Corolla",  935,  -4),
              new Car("Cupra Formentor",  868,  145),
              new Car("Volvo XC40",  842,  1),
              new Car("Polestar 2",  836,  1990),
              new Car("VW T-Cross",  831,  -37)
        };

        public Car[] GetAllCars()
        {
            return cars;
        }
        
      
    
    }
}
