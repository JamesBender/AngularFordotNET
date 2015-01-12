using System.Collections.Generic;
using System.Web.Mvc;
using BootstrapOne.Models;
using Newtonsoft.Json;

namespace BootstrapOne.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View("Index", "", GetListOfPeopleAsString());
        }

        private string GetListOfPeopleAsString()
        {
            var listOfPersons = new List<Person>
            {
                new Person {Id = 1, FirstName = "Han", LastName = "Solo", UserName = "HSolo"},
                new Person {Id = 2, FirstName = "Luke", LastName = "Skywalker", UserName = "LSkywalker"}
            };

            return JsonConvert.SerializeObject(listOfPersons); 
        }
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}