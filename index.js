const http = require('http');
const url = require('url');
const retete = require('./data/retete');
const routes = require('./routes');
const sql = require('mssql');
const Connection =require('tedious').Connection;

const config = {
    server: 'ALEXANDRUT-PC',
    user: 'SA',
    password: 'Sysadmin123#',
    instancename: 'SQLEXPRESS',
    options: {
        database: 'RetetarTencuieliArtDeco_DB',
        trustServerCertificate: true
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


/*const server = http.createServer((req, res) =>{
    if(req.url === '/data/retete') {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(retete))
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({ message: 'route not found'})) 
    }
});*/

const server = http.createServer(async (req, res) => {
    if(req.url === '/data/retete'){
        try{
            await sql.connect(config);

            const queryRes = await sql.query('SELECT * FROM Tencuiala')

            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(queryRes.recordset));

        } catch (error) {
            console.error('error:', error);
            res.writeHead(500, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({message: 'Internal server error'}));
        } finally {
            sql.close();
        } 
    }
        
    else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Route not found' }));
        }
})

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));


