const express = require('express');
const mongoose = require('mongoose');
const cors  = require('cors');
const path = require('path');
const socketio = require('socket.io');
const http = require('http');

require('dotenv').config();

const routes = require('./routes');

const app = express();
const server = http.Server(app);
const io = socketio(server);


mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.CLUSTER_NAME}-x1czt.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// para produção readis para guardar informações para o banco

const connectedUsers = {};

io.on('connection', socket => {
    const { user_id } = socket.handshake.query;
    connectedUsers[user_id] = socket.id;
});

app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;
    return next();
});
// req.query = Acessar query params (para filtros)
// app.get('/users', (req, res) => {
//     res.json({ idade: req.query.idade });
// });

// req.params = Acessar route params (para edição, delete)
// app.put('/users/:id', (req, res) => {
//     res.json({ id: req.params.id });
// });
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);


// req.body = Acessar corpo da requisição (criação, edição)

server.listen(3333, () => { console.log("Servidor rodando!"); });