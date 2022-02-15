const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
    } else if (req.url === '/about') {
        res.end('Welcome to our short page');
    } else {
        res.end(`
    <h1>Ooops!</h1>
    <p>we can't seem to find the page you  are looking for<p>
    <a href="/">back home</a>`);
    }
});
server.listen(5000);