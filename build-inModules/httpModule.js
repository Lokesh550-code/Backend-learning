const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
        res.write("Welcome to our homepage!");
        res.end();
  } else if (req.url === "/about") {
        res.write("This is a local server, which is useless.");
        res.end();
  } else {

        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write("Error you are at the wrong page!");
        res.write(`<h1>OOPS</h1> \n <p>wrong page </p>
            <p> go back to home page </p>
            <a href='/'>back home</a>`);
        res.end();
    }
});

server.listen("5000");