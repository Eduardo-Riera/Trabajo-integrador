/*/ const persona = '{"nombre":"Eduardo", "edad":57, "nacionalidad":"Argentina"}'
const persona = 'https://randomuser.me/api/'
const obj = JSON.parse(persona);
document.getElementById('demo').innerHTML =
    "Sexo: " + obj.gender;
document.getElementById('demo1').innerHTML =
    "Nombre: " + obj.name.title + ' ' + obj.name.first + ' ' + obj.name.last;
document.getElementById('demo2').innerHTML =
    "Dirección: " + obj.location.street.number + ' ' + obj.location.street.name;
*/
// fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
//     .then(response => response.json())
//     .then(json => console.log(json))

//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(dato => document.getElementById('fotografiaDelAutor').innerHTML = dato.url);


// var xhr = new XMLHttpRequest(); //invoke a new instance of the XMLHttpRequest
// xhr.onload = success; // call success function if request is successful
// // xhr.onerror = error;  // call error function if request failed
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/albums/1/photos'); // open a GET request
// xhr.send(); // send the request to the server.
// function success() {
//     var data = JSON.parse(this.responseText); //parse the string to JSON
//     document.getElementById('fotografiaDelAutor').innerHTML = data.;
//     console.log(data);
// }

// const persona = {'url': 'https://jsonplaceholder.typicode.com/albums/1'}
// const obj = JSON.parse(persona);
// document.getElementById('fotografiaDelAutor').innerHTML = obj.url;

fetch('https://api.github.com/users/Eduardo-Riera', {
  method: "GET",
  headers: {"Content-type": "application/json;charset=UTF-8"}
})
.then(response => response.json()) 
//.then(json => console.log(json)); 
.then(json => document.getElementById('fotografiaDelAutor').innerHTML = json.avatar_url);
// .catch(err => console.log(err));

function init() {
 
    let a = document.createElement("a");
    a.setAttribute("href", "http://www.google.es");
    let aTexto = document.createTextNode("Google");
    a.appendChild(aTexto);
     
    document.body.appendChild(a);
 
}
 
window.onload = init;

function init1() {
 
    let div = document.createElement("div");
    //a.setAttribute("href", "http://www.google.es");
    let divTexto = document.createTextNode("Este es mi curriculum vitae");
    div.appendChild(divTexto);
     
    document.body.appendChild(div);
 
}
 
window.onload = init1;