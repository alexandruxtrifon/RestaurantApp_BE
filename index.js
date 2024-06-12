const http = require('http');
const url = require('url');
const retete = require('./data/retete');
const routes = require('./routes');
const sql = require('mssql');
const Connection =require('tedious').Connection;

const config = {
    server: 'ALEXANDRUT-PC\\SQLEXPRESS',
    authentication: {
        type: 'default',
        options: {
            userName: 'sa',
            password: 'Sysadmin123#'
        }
    },
    options: {
        database: 'RetetarTencuieliArtDeco_DB',
    }
};
var connection = new Connection(config);
connection.on('connect', function(err) {
    console.log("Connected");
})
sql.connect(config, err => {
    if(err) {
        console.error('Database connection failed: ', err);
        return;
    }
    console.log('Connected to SQLServer');
});


const server = http.createServer((req, res) =>{
    if(req.url === '/data/retete') {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(retete))
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({ message: 'route not found'}))
        
    }

});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));


