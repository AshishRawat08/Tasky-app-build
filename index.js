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
const htmlTaskContent = ({ id, title, type, description, url }) => `
    <div class ='col-md-6 col-lg-4 mt-3' id=${id}>
        <div class = 'card shadow-sm task_card'>
            <div class = 'card-header d-flex justify-content-end task_card_header'
                <button type = 'button' class = 'btn btn-outline-light mr-1.5' name = '${id}'>
                <i class="fas fa-pencil-alt name=${id}"></i>
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
                <button type = 'button'class = 'btn btn-outline-promary float-right' data-bs-toggle="modal" data-bs-target="#showTask">Open Task</button>
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


const updatelocalstorage = () =>{
    localStorage.setItem(
        "tasky",
        JSON.stringify({
            tasks: state.taskList,  // calling state.taskList
        })
    );
};
