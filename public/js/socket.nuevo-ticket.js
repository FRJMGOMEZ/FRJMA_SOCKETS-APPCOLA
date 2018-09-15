const socket = io();

const label = $('#lblNuevoTicket');

socket.on('connect',()=>{console.log('Usuario Conectado al servidor')})
socket.on('disconnect',()=>{console.log('Usuario desconectado del servidor')})


socket.on('estadoActual',(respuesta)=>{

  label.text(`Estado actual: ${respuesta.actual}`);})



$('button').on('click',()=>{

socket.emit('siguienteTicket',null,(siguienteTicket)=>{

  label.text(siguienteTicket)})

})
