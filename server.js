const http = require("http");
const { url } = require("inspector");

const port = 8081;  // local port number

// http methods 
/*
GET: in order to get data from server
POST: in order to sending data to server
DELETE: deleting dta from the the database
PATCH: minimum updating certain fields
PUT: full update
*/

const toDoList =["learn", "apply things", "success"];

http
    .createServer((req, res) => {    // call back function
        const {method, url}= req

        // console.log(method, url)
        // https://localhost:8081/route-name

        if (url === "/todos"){
                if(method === "GET"){
                    res.writeHead(404);
                    res.write(toDoList.toString());
                }
        } 
        res.end()
    // res.writeHead(200, {"Content-Type": "text/html"});
    // res.write("<h1>Hey my server started hello i am here===hdwadhga</h1>");
    // res.end();

})
.listen(port, () => {      // call back function 
    console.log(`Node js server started running on port ${port}`);
});

// https://localhost:8081 
// https://localhost:8081/