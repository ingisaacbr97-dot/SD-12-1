
import { getServerURL } from "./task1.js";// Se importa la function que regresa la dirección del localhost

export async function delUser(id) {//Exportamos la funcion asincrona llamada delUser con el parametro id
  const res = await fetch(`${getServerURL()}/users/${id}`, { method: "DELETE" }); // Guardamos la respuesta en la constante res la respuesta al protocolo fetch, donde dentro de las comillas inversas interpolamos la variable del Url, la ruta y el id a eliminar, el fetch hace una peticion http, el argumento delete es el que elimina el objeto con el id 
  if (!res.ok) throw new Error(`No se pudo borrar el usuario ${id}`);// //Condicional que compara la respuesta, si está es diferente a la esperada por el metodo Ok, se lanza un objeto tipo error con la leyenda: No se pudo borrar el usuario, instanciando el id que se deseaba borrar

}
