console.log("connected day 30");
// var state = {
//     taskList:[
//         {
//             imageUrl : "",
//             taskTitle: "",
//             taskType: "",
//             taskDescription: ""
//         },
//         {
//             imageUrl : "",
//             taskTitle: "",
//             taskType: "",
//             taskDescription: ""
//         },
//         {
//             imageUrl : "",
//             taskTitle: "",
//             taskType: "",
//             taskDescription: ""
//         },
//         {
//             imageUrl : "",
//             taskTitle: "",
//             taskType: "",
//             taskDescription: ""
//         },
//         {
//             imageUrl : "",
//             taskTitle: "",
//             taskType: "",
//             taskDescription: ""
//         },
//     ]
// }

// backup storage 
const state = {
  taskList: [],
};

// DOM operations here
const taskContents = document.querySelector(".task_contents");
const taskModal = document.querySelector(".task_modal_body");

// console.log(taskContents);
// console.log(taskModal);

// template for card on our screen
 
// element identifier key is misssing on line 52 at the end -- key=${id}
const htmlTaskContent = ({ id, title, description, type, url }) => `
    <div class ='col-md-6 col-lg-4 mt-3' id=${id}>
        <div class = 'card shadow-sm task_card'>
            <div class = 'card-header d-flex justify-content-end task_card_header'
                <button type = 'button' class = 'btn btn-outline-light mr-1.5' name = '${id}'>
                <i class="fas fa-pencil-alt m-2 name=${id}"></i>
                </button>
                <button type = 'button' class = 'btn btn-outline-danger mr-1.5' name = '${id}'>
                <i class="fas fa-trash-alt name=${id}"></i>
                </button>
            </div>
            <div class = 'card-body'>      
                ${
                    url && 
                    `<img width='100%' src=${url} alt='card image' class = 'card-img-top md-3 rounded-lg' />`
                }  
                <h4 class = 'card-title task_card_title'>${title}</h4>>
                <p class = 'description trim-3-lines text-muted'>${description}</p>
                <div class = 'tags text-white d-flex flex-wrap'>
                    <span class = 'badge bg-primary m-1' >${type}</span>              
                </div>    
            </div>
            <div class ='card-footer'>
                <button type = 'button'class = 'btn btn-outline-primary float-right' data-bs-toggle="modal" data-bs-target="#showTask">Open Task</button>
            </div>
        </div>
    </div>
`;

// modal body onclick of open task 
const htmlModalContent = ({ id, title, description, url }) => {
    const date = new Date(parseInt(id));
    return `
    <div id = ${id}>
         ${
             url && 
            `<img width='100%' src=${url} alt='card image' class = 'img-fluid place_holder_image mb-3' />`
         }
         <strong class = 'text-muted text-sm'>created on: ${date.toDateString}</strong>
         <h2 class = 'mb-3' >${title}</h2> 
         <p class = 'text-muted'>${description}</p>
    </div>
    `;
}

// here we convert JSON to string
const updatelocalstorage = () =>{
    localStorage.setItem(
        "task",
        JSON.stringify({
            task: state.taskList,  // calling state.taskList
        })
    );
};


// load  initial data 
const LoadInitialData = () => {
    const localStorageCopy = JSON.parse(localStorage.task)   // here we convert string to JSON for rendering card on screen 

    if (localStorageCopy) state.taskList = localStorageCopy.task;

    state.taskList.map((cardDate) =>{
        taskContents.insertAdjacentHTML("beforeend", htmlTaskContent(cardDate))
    });
};

// spread operator 

// const obj ={
//     name : "ashish",
//     age : 4
// }
// console.log(obj);
//  {name: 'ashish', age: 4}
// 
// console.log({obj});
// {obj: {…}}obj: {name: 'ashish', age: 4}age: 4name: "ashish"[[Prototype]]: Object
// 
// console.log({...obj});
//  {name: 'ashish', age: 4}

// adding a new key into object name designation
// console.log({...obj, designation: "developer"});
// {name: 'ashish', age: 4, designation: 'developer'}

// updating key value using spread operator
// console.log({...obj, age: 5});
//  {name: 'khali', age: 5}

// console.log({...obj, age: 6});
//  {name: 'khali', age: 6}


// encrypted date 
// console.log(Date.now());
// VM1190:1 1701500561611



// when we upadte or when we edit ...we need to save 
const handleSubmit = (event) =>{
    // console.log("event triggered"); 
    const id = `$(Date.now())`;
    const input = {
        url: document.getElementById("imageUrl").value,
        title: document.getElementById("taskTitle").value,
        tags: document.getElementById("tags").value,
        taskDescription: document.getElementById("taskDescription").value,
    };
if (input.title ==="" || input.tags ==="" || input.taskDescription ==="") {
       return alert("Please fill all the fields :-");
    }

taskContents.insertAdjacentHTML("beforeend",htmlTaskContent({...input, id}));  // using spread
state.taskList.push({ ...input, id });
updatelocalstorage();
};


