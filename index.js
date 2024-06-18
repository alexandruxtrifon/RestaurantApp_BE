const http = require('http');
const url = require('url');
const retete = require('./data/retete');
const routes = require('./routes');
const sql = require('mssql');
const Connection =require('tedious').Connection;
var config = require('./config');

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
    const reqUrl = url.parse(req.url, true);
    const path = reqUrl.pathname;
    const query = reqUrl.query;
    if(path === '/data/retete' && req.method === 'GET') {
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
    } else if (path.includes('/data/retete/') && req.method === 'GET'){
        const id = path.split('/')[3];
        try {
            await sql.connect(config);
            const queryResult = await sql.query(`SELECT d.Descriere FROM Descriere d INNER JOIN Tencuiala t ON d.Cod_Tencuiala = t.Cod_Tencuiala WHERE t.Cod_Tencuiala = ${id}`);

            res.writeHead(200, {'Content-Type': 'application/json' });
            res.end(JSON.stringify(queryResult.recordset));
        } catch (error) { 
            console.error('Error executing query: ', error);
            res.writeHead(500, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({message: 'Internal server error'}));
        } finally {
            sql.close();
        }
    }
       //kjhhkj
    //jhgdd

    else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Route not found' }));
        }
})

const PORT = 3000;
server.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));


