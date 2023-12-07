const express = require('express')
const app = express();
app.use(express.json());

const port = 8081; // local port numbner 

const toDoList = ["learn", "apply things", "succeed"];

// http://locahost:8081/todos
app.get("/todos", (req, res) => {
  // res.writeHead(200)
  // res.write(toDoList)
  res.status(200).send(toDoList)

});
app.post("/todos", (req, res) => {
  let newToDoItem = req.body.name;
  toDoList.push(newToDoItem);
  res.status(201).send({message : "Task added successfully"});

});
app.delete("*", (req, res) => {
  const deleteThisItem =req.body.name;
  toDoList.find((elem, index) =>{
  if (elem === deleteThisItem){
    toDoList.splice(index, 1)
  }
  });
  res.status(202).send({message : `Item deleted ${req.body.name}`});
});

app.all("/todos", (req, res) =>{
  res.status(501).send()
});

app.listen(port, () => {
  console.log(`Nodejs server started running on port ${port}` )
});
