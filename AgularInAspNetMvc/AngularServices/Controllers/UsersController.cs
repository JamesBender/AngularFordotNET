using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using AngularServices.Models;

namespace AngularServices.Controllers
{
    public class UsersController : ApiController
    {
        private static IList<Person> _listOfPersons;

        public UsersController()
        {
            if (_listOfPersons == null)
            {
                _listOfPersons = new List<Person>
                {
                    new Person {Id = 1, FirstName = "Fred", LastName = "Flinstone", UserName = "FFlinstone"},
                    new Person {Id = 2, FirstName = "Barney", LastName = "Rubble", UserName = "BRubble"}
                };
            }
        }

        public IList<Person> Get()
        {
            return _listOfPersons;
        }

        public Person Get(int id)
        {
            return _listOfPersons.Where(x => x.Id == id).FirstOrDefault();
        }

        public int Post(Person person)
        {
            person.Id = _listOfPersons.Count + 1;
            _listOfPersons.Add(person);
            return person.Id;
        }
    }
}
