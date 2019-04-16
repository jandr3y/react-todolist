export default class Storage {
  setTasks(tasks){
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  getTasks(){
    return new Promise((resolve, reject) => {
      let tasks = localStorage.getItem('tasks')
      if(tasks){
        resolve(JSON.parse(tasks))
      }else{
        reject([])
      }
    })
  }
}