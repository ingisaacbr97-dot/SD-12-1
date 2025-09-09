import { getServerURL } from "./task1.js";// Se importa la function que regresa la dirección del localhost

export async function addUser(firstName, lastName, email) { //Exportamos la funcion asincrona llamada addUser con los parametros primer nombre, apellido y correo
  const payload = { firstName, lastName, email }; //Creamos el objeto que enviaremos al servidor usando object property shorthand: las claves se llaman igual que las variables (https://eslint.org/docs/latest/rules/object-shorthand).
  const res = await fetch(getServerURL() + "/users", {//Aqui se guarda en la constante res (Respuesta), la espera de respuesta de Fetch (Peticion Http) a la consulta de url + la ruta users (/users)
    method: "POST", //Para crear un nuevo recurso
    headers: { "Content-Type": "application/json" }, //Declaramos que el cuerpo de la peticion es en formato JSON
    body: JSON.stringify(payload), //El cuerpo del post, convertimos el objeto payload a tipo cadena Json, a partir del metodo Stringify() del objeto global Json 
  });
  if (!res.ok) throw new Error("No se pudo crear el usuario"); //Condicional que compara la respuesta, si está es diferente a la esperada por el metodo Ok, se lanza un objeto tipo error con la leyenda: No se pudo crear usuario
  const created = await res.json(); // En la constante Creado (Created) guardamos la respuesta parseada en Json 
  console.log(created); // Mostramos en consola el objeto creado que devolvió el servidor 
}
