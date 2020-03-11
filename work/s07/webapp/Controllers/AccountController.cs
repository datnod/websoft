using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using webapp.Models;
using webapp.Services;
using System.Text.Json;

namespace webapp.Controllers
{
    [ApiController]
    [Route("api/[controller]/{number}")]
    public class AccountController : ControllerBase
    {
        public AccountController(JsonFileAccountService accountService)
        {
            AccountService = accountService;
        }
 
        public JsonFileAccountService AccountService { get; }
       
        [HttpGet]
        public string Get (int number) {
            var accounts = AccountService.GetAccounts(); {
                foreach (var items in accounts) {
                    if (number == items.Number) {
                        List<Account> itemsList = new List<Account>();
                        itemsList.Add(items);
                        var json = JsonSerializer.Serialize<IEnumerable<Account>> (itemsList);
                        return json;
                    }
                }
                return "[{\"Error\":\"Account does not exist\"}]";
            }
        }
    }
}