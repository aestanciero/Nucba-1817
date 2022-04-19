const pizzas=[{
    id: 1,
    nombre: "Napolitana",
    ingredientes:["queso","aceituna", "tomate"],
    precio: 600,
},

   { id: 2,
    nombre: "Especial",
    ingredientes:["queso","aceituna", "jamon"],
    precio: 550,
   },

    {id: 3,
    nombre: "4 Queso",
    ingredientes:["queso","roquefort", "aceituna"],
    precio:750,
    },

   { id: 4,
    nombre: "Calabresa",
    ingredientes:["queso","salame", "aceituna"],
    precio: 900,
   },

    {id: "5",
    nombre: "Margarita",
    ingredientes:["queso","tomate", "albahaca"],
    precio: 950,
},
    
    {id: 6,
    nombre: "Jamon y Palmitos",
    ingredientes:["queso","jamon", "palmitos"],
    precio: 1000,
    },
]

//Las pizzas que tengan ID impar

const idImpar= pizzas.filter(pizzas=> pizzas.id %2 !=0).map(pizzas =>pizzas.nombre)
console.log(idImpar)

//¿Hay alguna pizza que valga menos de $600?

const valorPizza=pizzas.filter(pizzas=>pizzas.precio<600).map(pizzas=>pizzas.nombre)
console.log(valorPizza)

//Los nombres de todos las pizzas.

const nombrePizza=pizzas.map(pizzas=>pizzas.nombre)
console.log(nombrePizza)

// Los precios de las pizzas.

const preciosPizza= pizzas.map(pizzas=>pizzas.precio)
console.log(preciosPizza)

// El nombre de cada pizza con su respectivo precio.

pizzas.forEach(pizzas=>console.log(`${pizzas.nombre}, su precio es $ ${pizzas.precio}`))


