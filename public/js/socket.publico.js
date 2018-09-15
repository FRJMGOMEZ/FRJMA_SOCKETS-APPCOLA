const socket = io();

const label = $('#lblNuevoTicket');

socket.on('connect',()=>{console.log('Servicio disponible')})
socket.on('disconnect',()=>{console.log('Servicio no disponible')})

const casilla1 = $('#lblTicket1');
const casilla2 = $('#lblTicket2');
const casilla3 = $('#lblTicket3');
const casilla4 = $('#lblTicket4');

const escritorio1= $('#lblEscritorio1');
const escritorio2= $('#lblEscritorio2');
const escritorio3= $('#lblEscritorio3');
const escritorio4= $('#lblEscritorio4');


const casillas = [casilla1,casilla2,casilla3,casilla4];

const escritorios = [escritorio1,escritorio2,escritorio3,escritorio4];


socket.on('estadoActual',(data)=>{

let ultimosCuatro = data.ultimosCuatro;

actualizaHtml(ultimosCuatro); })


socket.on('ultimosCuatro',(data)=>{

let audio = new Audio('audio/new-ticket.mp3')

audio.play();

console.log(data);

actualizaHtml(data.ultimosCuatro)})


const actualizaHtml = (ultimosCuatro)=>{

  for(let i=0 ; i<=ultimosCuatro.length-1 ; i++){

    casillas[i].text(`Ticket: ${ultimosCuatro[i].numero}`);
    escritorios[i].text(`Escritorio: ${ultimosCuatro[i].escritorio}`);}}
