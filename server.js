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
      if (method === "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(toDoList.toString());
      } else if (method === "POST") {
        let body = "";
        req
          .on("error", (err) => {   // error data and  end are the events 
          console.log(err);
        })
          .on("data", (chunk) => {
          body += chunk;
          // console.log(chunk);    // data is in strinf formate
        })
          .on("end", () => {
          body = JSON.parse(body);  // convert string into Json formate

          let newToDo = toDoList;
          newToDo.push(body.item);
          console.log(newToDo);
          // console.log("data:", body);
        });
      }else if(method ==="DELETE"){
        let body = "";
        req 
          .on("error",(err) => {
            console.log(err);
          })
          .on("data",(chunk) => {
            body += chunk;
            // console.log(chunk);
          })
          .on("end", () => { 
            body = JSON.parse(body);

            let deleteThisItem = body.item;
        
            for (let i=0; i < toDoList.length; i++){      // using for loop
            if (toDoList[i] === deleteThisItem) {
              toDoList.splice(i,1);
              break;
            }else {
                 console.log("Error : MATCH NOT FOUND");
                 break;
            }
          }

          // toDoList.find((elem, index)=>{      // using find method
          //   if (elem === deleteThisItem){
          //     toDoList.splice(index,1);
          //   } else {
          //    console.log("error checking march not found")
          //   }
          // })
        });
      }
      else {
        res.writeHead(501);
      }
    } else {
      res.writeHead(404);
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
