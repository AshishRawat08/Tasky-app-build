const http = require("http");

const port = 8081; // local port numbner 

// HTTP Methods

/*
>> GET: Inorder to get data from server
>> POST: Sending data to server
>> DELETE: Deleting the data from database
>> PATCH: Updating certain fields
>> PUT: Full Update
*/

const toDoList = ["learn", "apply things", "succeed"];

http
  .createServer((req, res) => {
    // call back func
    const { method, url } = req;

    // console.log(method, url);
    if (url === "/todos") {
      if (method === "GET"){
        res.writeHead(200);
        res.write(toDoList.toString());
      }

    }
    res.end();


    // res.writeHead(200, {"Content-Type": "text/html"});
    // res.write("<h1>Hey my server started hello i am hereadhga</h1>");
    // res.end();

  })
  .listen(port, () => {      // call back function 
    console.log(`Node js server started running on port ${port}`);
  });

// https://localhost:8081 
// https://localhost:8081/#  called routs 
// https://localhost:8081/sing-up
// https://localhost:8081/about-us
// https://localhost:8081/contact-us
