let todo=[];

let req=prompt("Enter Your Request");

while (true) {
    if(req=="quit"){
        console.log("Quiting the aap");
        break;
    }
    if(req=="list"){
        console.log("_________________");
        for(let i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("_________________");
    }
    else if (req=="add"){
       let task = prompt("Enter you want to add");
       todo.push(task)
       console.log("task added");
    }
    else if(req=="delete"){
       let idx= prompt("Enter index of you want to delete task");
       todo.splice(idx, 1)
       console.log(" task deleted")
    }else{
        console.log("Wrong Request");
    }

    req = prompt("Please enter your task");
} 












