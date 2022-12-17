const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    // Write the date check condition here and return the array of overdue items accordingly.
    // FILL YOUR CODE HERE
    oitems = []
    for(var i = 0, size = all.length; i < size ; i++){
        if(all[i].dueDate== yesterday){
            oitems.push(all[i]);
        }
    }
    return oitems;
  }

  const dueToday = () => {
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    // FILL YOUR CODE HERE
    titems = []
    for(var i = 0, size = all.length; i < size ; i++){
        if(all[i].dueDate== today){
            titems.push(all[i]);
        }
    }
    return titems;
  }

  const dueLater = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    // FILL YOUR CODE HERE
    litems = []
    for(var i = 0, size = all.length; i < size ; i++){
        if(all[i].dueDate== tomorrow){
            litems.push(all[i]);
        }
    }
    return litems;
  }

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    // FILL YOUR CODE HERE
    

    var due = list[0].dueDate
    let s=''
    for(var i = 0, size = list.length; i < size ; i++){
        var check= list[i].completed
        var symbol='[ ]'
        if(check==true){
            symbol='[x]'
        }
        if(due==yesterday){
            s = s+symbol+' '+list[i].title+' '+list[i].dueDate
            s = s+"\n"
        }
        else if(due==today){
            s = s+symbol+' '+list[i].title
            s = s+"\n"
        }
        else if(due==tomorrow){
            s = s+symbol+' '+list[i].title+' '+list[i].dueDate
            s = s+"\n"
        }
    }

    return s

    
    // return OUTPUT_STRING
  }

  return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
}

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = d => {
  return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
//console.log("\n\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
//console.log("\n\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
//console.log("\n\n")
