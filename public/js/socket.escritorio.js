const socket = io();

let searchParams = new URLSearchParams(window.location.search);

if(!searchParams.has('escritorio'))
{ window.location = 'index.html';
  throw new Error('El escritorio es necesario');
     }

let escritorio = searchParams.get('escritorio');


$('h1').text(`Escritorio: ${escritorio}`);

$('button').on('click',()=>{

let label = $('small');

socket.emit('atenderTicket',{escritorio:escritorio},(respuesta)=>{

  if(respuesta.ok === false){
    label.text(respuesta.message)
    alert('No hay más tickets')}

label.text(respuesta.numero);

console.log(respuesta)})

})
