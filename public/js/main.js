

let deleteTask  = document.querySelectorAll('.fa-trash-alt')
let upVote = document.querySelectorAll('.fa-thumbs-up')


// Array.from(deleteTask).forEach((element)=>{
//     element.addEventListener('click', deleteRequest)
// })

Array.from(upVote).forEach((element)=>{
    element.addEventListener('click', upvoteTask)
})


async function upvoteTask(){
    
    let body = {
                toDo: this.parentNode.childNodes[1].innerText,
                priority: this.parentNode.childNodes[3].innerText
    }
    try{
        const response = await fetch('/upvote',{
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        })
            
        const data = await response.json()
        console.log(data)
        location.reload()
        }catch(error){
             console.group(error)
    }
}



// async function deleteRequest(){

//     let body = {
//         toDo: this.parentNode.childNodes[1].innerText
//     }

//     try{
//         const response = await fetch('deleteTask',{
//             method: 'delete',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify(body)
//         })
    
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(error){
//         console.group(error)
//     }
// }