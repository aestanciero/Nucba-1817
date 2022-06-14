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


// Crear un archivo HTML que contenga un h2, un h4, un input number y un botón. 

//El desafío será, al tocar el botón, capturar el valor ingresado en el input.
// Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id coincida con el numero ingresado en el input. 

// Si no coincide con ningún id, renderizar un mensaje de error. 



  class Pizza {
    static lastID = 0;
    constructor(nombre, ingredientes, precio) {
      this.id = ++Pizza.lastID;
      this.nombre = nombre;
      this.ingredientes = ingredientes;
      this.precio = precio;
    }
  }
  
  listaDePizzzas = [
    new Pizza('Napolitana', ["queso","aceituna", "tomate"], 600),
    new Pizza('Especial', ["queso","aceituna", "jamon"], 550),
    new Pizza('4 Queso', ["queso","roquefort", "aceituna"], 750),
    new Pizza('Calabresa', ["queso","salame", "aceituna"], 900),
    new Pizza('Margarita', ["queso","tomate", "albahaca"], 950),
    new Pizza('Jamon y Palmitos', ["queso","jamon", "palmitos"], 1000),
  ];
  document.querySelector('button').addEventListener('click', () => {
    const idPizza = document.querySelector('input').value;
    const pizza = listaDePizzzas.find((p) => p.id == idPizza);
    if (pizza) {
      document.querySelector('h2').textContent = `El nombre de la pizza es: ${pizza.nombre}`;
      document.querySelector('h4').textContent = `El precio de la pizza es: ${pizza.precio}`;
    } else {
      document.querySelector('h2').textContent = `La pizza con el id ${idPizza} no existe`;
      document.querySelector('h4').textContent = '';
    }
  });





        




