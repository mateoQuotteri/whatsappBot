// AQUI SOLO TENEMOS EL CODIGO, DEBERIAMOS INSTALAR LAS LIBRERIAS NECESARIAS
// WHATSAPP WEBJS Y QRCODE TERMINAL


const qrcode = require('qrcode-terminal');

//Crea una sesión con whatsapp-web y la guarda localmente para autenticarse solo una vez por QR
const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
});

//Genera el código qr para conectarse a whatsapp-web
client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

//Si la conexión es exitosa muestra el mensaje de conexión exitosa
client.on('ready', () => {
    console.log('Conexion exitosa nenes');
});


//Aquí sucede la magia, escucha los mensajes y aquí es donde se manipula lo que queremos que haga el bot
client.on('message', message => {
    console.log(message);
    
        client.sendMessage(message.from, 'Hola soy un bot que fue programado por Mateo, mi creador esta ocupado.');
    
});

client.initialize();