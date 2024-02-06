const tasks = ['Задача 1'];

function addTask(task) {
    tasks.push (task)
}

function deleteTask(task) {
    const index = tasks.indexOf(task)
    if (index !== -1)
        tasks.splice(index, 1)    
}

function transferTask(task) {
    const index = tasks.indexOf(task)
    if (index !== -1) {
        const transfer = tasks.splice(index, 1) 
        tasks.unshift(transfer[0]) 

    }
}
    
addTask('Задача 2')
addTask('Задача 3')
deleteTask('Задача 1')
transferTask('Задача 3')
console.log(tasks)