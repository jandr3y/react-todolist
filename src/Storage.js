export default class Storage {
  setTasks(tasks){
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  getTasks(){
    return new Promise((resolve, reject) => {
      let tasks = localStorage.getItem('tasks')
      if(tasks){
        tasks = JSON.parse(tasks)
        
        if(Array.isArray(tasks)){
          for(let i = 0; i < tasks.length; i++){
            tasks[i].date = new Date(tasks[i].date);
          }

          resolve(tasks)
        }
        
      
      }else{
        reject([])
      }
    })
  }

 
}