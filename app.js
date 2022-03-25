const http = require('htpp');

const server = http.createServer((req,res) => {
    if (req.url === '\') {
        res.write('Heloo world ')
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify[1,2,3]);
        res.end();
    }

});


server.listen(3000);

console.log('Listning on port 3000...');

