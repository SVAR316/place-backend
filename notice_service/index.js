require('dotenv').config()
const WebSocket = require('ws');
const http = require('http');

const server = http.createServer();
const wss = new WebSocket.Server({ server });

// TODO: Доделать оповещения
wss.on('connection', (ws) => {
    console.log('Клиент подключен');

    ws.on('message', (message) => {
        console.log('Получено сообщение:', message);
    });

    ws.on('close', () => {
        console.log('Клиент отключен');
    });

    // Пример отправки сообщений клиенту
    setInterval(() => {
        if (ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify({ message: 'Привет от сервера!' }));
        }
    }, 5000);
});

// Обработка HTTP запроса перед апгрейдом на WebSocket
server.on('upgrade', (req, socket, head) => {

    console.log(req.headers)
    if(typeof req.headers.access != 'undefined') {

    }else {
        socket.destroy();
    }
});

// Запуск HTTP сервера
server.listen(process.env.PORT, () => {
    console.log(`WebSocket сервер работает на порту ${process.env.PORT}`);
});
