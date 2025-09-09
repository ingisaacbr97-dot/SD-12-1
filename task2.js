import { getServerURL } from "./task1.js";// Se importa la function que regresa la dirección del localhost

export async function listUsers() { // Se exporta la función Asincrona llamada listUsers
  const res = await fetch(getServerURL() + "/users"); //Aqui se guarda en la constante res (Respuesta), la espera de respuesta de Fetch (Peticion Http) a la consulta de url + la ruta users (/users)
  if (!res.ok) throw new Error("Error al obtener usuarios"); //Condicional que compara la respuesta, si está es diferente a la esperada por el metodo Ok, se lanza un objeto tipo error con la leyenda: Error al obtener usuarios 
  const users = await res.json(); //En una constante llamada Users se guarda la respuesta en formato Json, fruto del primer fetch donde consultamos la ruta
  console.log(users); //Mostramos en consola el Json con la consulta a la ruta
}
