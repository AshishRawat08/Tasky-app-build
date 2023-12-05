const http = require("http");

const port = 8081;  // local port number

http
    .createServer((req, res) => {    // call back function
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h1>Hey my server started hello i am here===hdwadhga</h1>");
    res.end();

})
.listen(port, () => {      // call back function 
    console.log(`Node js server started running on port ${port}`);
});
// https://localhost:8081 