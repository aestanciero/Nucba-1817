let ingredientesPizza=["queso","harina","levadura","aceitunas","tomate","jamon","rucula","aceite","huevos","roquefort"]

function pizzeadaIngredientes(ingredientes){
    let pares = [];
    let impares = [];

    for(const ingrediente of ingredientes){
        if (ingrediente.length %2 ==0){
            pares.push(ingrediente);
        }
        else{
            impares.push(ingrediente);
        }
    }
 console.log("Los ingredientes pares son: "+ pares)
 console.log ("Los ingredientes imapres son: "+ impares)
}
pizzeadaIngredientes(ingredientesPizza);