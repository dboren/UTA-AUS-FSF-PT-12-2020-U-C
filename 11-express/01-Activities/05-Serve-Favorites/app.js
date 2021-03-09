const http = require('http');
const fs = require('fs');
const PORT = 8080;

// const displayHomePage = (res) => {
//     const myHTML = `
//     <html>
//       <body>
//         <h1>Dan's page</h1>
//         <p>Amogus</p>
//       </body>
//     </html>`;

//     res.writeHead(200, { 'Content-Type': 'text/html' });

//     res.end(myHTML);
// };

const displayHomePage = (req, res) => {
    fs.readFile(`${__dirname}/index.html`, (err, data) => {
      if (err) throw err;

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  };

const handleRequest = (req, res) => {
    const path = req.url;
  
    switch (path) {
      case '/':
        return displayHomePage(res);
  
    //   case '/portfolio':
    //     return displayPortfolio(res);
  
    //   default:
    //     return display404(path, res);
    }
  };


const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});