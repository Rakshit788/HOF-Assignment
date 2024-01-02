const items = [
    {
        name: "Iphone 15",
        category: "Mobile",
        priceUSD: 999,
    },
    {
        name: "Macbook Air",
        category: "Laptops",
        priceUSD: 1499,
    },
    {
        name: "Apple Watch",
        category: "Watches",
        priceUSD: 499,
    },
];

const CurrencyChangeRate =  60

items.map((obj) =>{
    obj.priceIndia =   obj.priceUSD  ;
    
     obj.priceIndia= obj.priceIndia*60
})

console.log(items);