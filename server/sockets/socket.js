const { io } = require('../server');
const {TicketControl} = require('../classes/ticket-control.js');

const ticketControl = new TicketControl();


io.on('connection', (client) => {

    client.on('siguienteTicket',(data,callback)=>{

       let siguienteTicket = ticketControl.siguienteTicket();

       callback(siguienteTicket)});

   ticketControl.getUltimoTicket();


   client.emit('estadoActual',{actual:ticketControl.getUltimoTicket(),
                               ultimosCuatro:ticketControl.getUltimosCuatro()});


   client.on('atenderTicket',(data,callback)=>{

      if(!data.escritorio){return callback({error:true,
                                            message:'Escritorio es necesario'})}

      let atenderTicket = ticketControl.atenderTicket(data.escritorio);


      callback(atenderTicket);

      client.broadcast.emit('ultimosCuatro',{ultimosCuatro:ticketControl.getUltimosCuatro()});  })

  })
