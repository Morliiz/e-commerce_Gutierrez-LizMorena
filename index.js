const data = [
    {
        "Model":"Yukon XL 1500",
        "detalle":"GMC",
        "año":2004,
        "precio":48,
        "stock":63,
        "img":"2G4WF551341392159"
    },
     {
        "Model":"tC",
        "detalle":"Scion",
        "año":2010,
        "precio":66,
        "stock":8,
        "img":"WAULFAFR1CA408896"
     },
     {
        "Model":"Voyager",
        "detalle":"Chrysler",
        "año":2001,
        "precio":69,
        "stock":38,
        "img":"3C6TD4DT4CG429467"
    },
    {
        "Model":"Grand Prix",
        "detalle":"Pontiac",
        "año":1971,
        "precio":5,
        "stock":74,
        "img":"1N6AA0CH1DN077274"
    },
    {
        "Model":"ES",
        "detalle":"Lexus",
        "año":2000,
        "precio":16,
        "stock":51,
        "img":"1G4CW54K644505748"
    },
    {
        "Model":"Tundra",
        "detalle":"Toyota",
        "año":2000,
        "precio":47,
        "stock":96,
        "img":"WBAVC73567A579798"
    },
    {
        "Model":"Focus",
        "detalle":"Ford",
        "año":2005,
        "precio":62,
        "stock":56,
        "img":"5J8TB3H79GL127298"
    },
    {
        "Model":"Xterra",
        "detalle":"Nissan",
        "año":2010,
        "precio":3,
        "stock":97,
        "img":"2G4GN5EC4B9935283"},
    {
        "Model":"G55 AMG"
        ,"detalle":"Mercedes-Benz"
        ,"año":2006,
        "precio":11,
        "stock":76,
        "img":"SCFAB01A67G828790"
    },
    {
        "Model":"B-Series Plus",
        "detalle":"Mazda",
        "año":2000,
        "precio":97,
        "stock":59,
        "img":"WBAKX6C50BC814307"
    }
    ];

let array = data.map(carro) (

);    
document.querySelector("section").innerHTML = array.join().replaceAll(",","");