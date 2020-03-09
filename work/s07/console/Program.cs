using System;
using System.IO;
using System.Text.Json;
using System.Data;

namespace console
{
    class Program
    {
        static bool flag = true;
        static void Main(string[] args)
        {   
            while(flag){
              Menu();
            }
        }

        public static void Menu(){

            Console.WriteLine("\n1. View Accounts");
            Console.WriteLine("2. View Account by number");
            Console.WriteLine("3. Exit Console");
            Console.WriteLine("\nSelect an option:");

            int choice = 0;

           try{
             choice = Convert.ToInt32(Console.ReadLine());
           }catch(Exception e){

               Console.WriteLine("Only numbers allowed!");
               Console.WriteLine(e.GetBaseException());
           }

            Console.WriteLine();
            switch(choice){
                case 1:
                    ReadAccounts();
                   
                    break;
                case 2:
                    ReadAccountByNumber();
                    break;
                case 3:
                    Console.WriteLine("Closing console!");
                    flag = false;
                    break;
                default:
                    Console.WriteLine("Select between one to three!");
                    break;
            }
        }

         static void ReadAccounts()
        {
            String file = "C://Users/lirid/websoft/work/data/account.json";

            using (StreamReader r = new StreamReader(file))
            {
                string data = r.ReadToEnd();

                var json = JsonSerializer.Deserialize<Account[]>(
                    data,
                    new JsonSerializerOptions {
                        PropertyNameCaseInsensitive = true
                    }
                );

                string headerColoumns = String.Format
                       ("{0, 10} {1, 10} {2, 10} {3, 10}","Number", "Balance", "Label", "Owner");
                Console.WriteLine(headerColoumns);    
                Console.WriteLine("---------------------------------------------");
                foreach (var acc in json) {
               // Console.WriteLine(account);

                       string rowValues = String.Format
                       ("{0, 10} {1, 10} {2, 10} {3, 10}", acc.Number, acc.Balance, acc.Label, acc.Owner);
                        Console.WriteLine(rowValues);
                        Console.WriteLine("---------------------------------------------"); 
                
                }
                        
            }
        }

        static void ReadAccountByNumber(){
            
            String file = "C://Users/lirid/websoft/work/data/account.json";

            using (StreamReader r = new StreamReader(file))
            {
                string data = r.ReadToEnd();
                // Console.WriteLine(data);

                var json = JsonSerializer.Deserialize<Account[]>(
                    data,
                    new JsonSerializerOptions {
                        PropertyNameCaseInsensitive = true
                    }
                );

                Console.WriteLine("Available accounts by number: 111111 , 222222, 333333, 42");
                Console.WriteLine("Choose an account by number: ");
                string headerColoumns;
                string rowValues;
                int value = 0;
                try{
                    value = Convert.ToInt32(Console.ReadLine());

                }catch(Exception e){
                    Console.WriteLine("Enter a number only!");
                    Console.WriteLine(e.GetBaseException());

                }
                Console.WriteLine();
                switch(value){
                    case 111111:
                        headerColoumns = String.Format
                        ("{0, 10} {1, 10} {2, 10} {3, 10}","Number", "Balance", "Label", "Owner");
                        Console.WriteLine(headerColoumns);    
                        Console.WriteLine("---------------------------------------------");
                        rowValues = String.Format
                        ("{0, 10} {1, 10} {2, 10} {3, 10}", json[0].Number, json[0].Balance, json[0].Label, json[0].Owner);
                        Console.WriteLine(rowValues);
                        Console.WriteLine("---------------------------------------------"); 
                    break;
                    case 222222:
                        headerColoumns = String.Format
                        ("{0, 10} {1, 10} {2, 10} {3, 10}","Number", "Balance", "Label", "Owner");
                        Console.WriteLine(headerColoumns);    
                        Console.WriteLine("---------------------------------------------");
                        rowValues = String.Format
                        ("{0, 10} {1, 10} {2, 10} {3, 10}", json[1].Number, json[1].Balance, json[1].Label, json[1].Owner);
                        Console.WriteLine(rowValues);
                        Console.WriteLine("---------------------------------------------"); 
                    break;
                    case 333333:
                        headerColoumns = String.Format
                        ("{0, 10} {1, 10} {2, 10} {3, 10}","Number", "Balance", "Label", "Owner");
                        Console.WriteLine(headerColoumns);    
                        Console.WriteLine("---------------------------------------------");
                        rowValues = String.Format
                        ("{0, 10} {1, 10} {2, 10} {3, 10}", json[2].Number, json[2].Balance, json[2].Label, json[2].Owner);
                        Console.WriteLine(rowValues);
                        Console.WriteLine("---------------------------------------------");
                    break;
                    case 42:
                        headerColoumns = String.Format
                        ("{0, 10} {1, 10} {2, 10} {3, 10}","Number", "Balance", "Label", "Owner");
                        Console.WriteLine(headerColoumns);    
                        Console.WriteLine("---------------------------------------------");
                        rowValues = String.Format
                        ("{0, 10} {1, 10} {2, 10} {3, 10}", json[3].Number, json[3].Balance, json[3].Label, json[3].Owner);
                        Console.WriteLine(rowValues);
                        Console.WriteLine("---------------------------------------------");
                    break;
                    default:
                    Console.WriteLine("No such account found!");
                    break;
                };
            }
        }
    }
}
