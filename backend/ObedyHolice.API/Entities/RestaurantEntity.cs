
using Microsoft.Azure.Cosmos.Table;

using System;
using System.Collections.Generic;
using System.Linq;

namespace ObedyHolice.API.Entities
{
    public class RestaurantEntity : TableEntity
    {
        private const string SEPARATOR = "|";

        public RestaurantEntity()
        {
        }

        public RestaurantEntity(string name, string subTitle, string website, IEnumerable<string> menuItems)
        {
            Name = name;
            SubTitle = subTitle;
            Website = website;
            MenuCsv = string.Join(SEPARATOR, menuItems);
            RowKey = Name;
            PartitionKey = DateTime.Now.ToString("yyyy-MM-dd");
        }

        public string Name { get; set; }

        public string SubTitle { get; set; }

        public string Website { get; set; }

        public string MenuCsv { get; set; }

        public Restaurant ToRecord() =>
            new(Name, SubTitle, Website, MenuCsv.Split(SEPARATOR).ToList());
    }
}
