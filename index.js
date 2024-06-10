const http = require('http');
const url = require('url');
const retete = require('./data/retete');
const routes = require('./routes');

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


