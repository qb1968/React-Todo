import React, {Component} from 'react';
import Todo from "./components/TodoComponents/Todo";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";

const data = [
  {
    task: "Go to Batcave!",
    id:1,
    done: false
  },
  {
    task: "Clean Batsuit!",
    id: 2,
    done: false
  },
  {
    task: "Go to Gotham!",
    id: 3,
    done: false
  },
  {
    task: "Catch the Joker!",
    id: 4,
    done: false
  }

];


class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 constructor() {
   super();

   this.state = {
     things: data
   };
  }

 

  toggleDone = id => {
    const newThings = this.state.things.map(item => {
        if (item.id === id) {
          return{
            ...item,
            done: !item.done
          };
        }else{
          return item;
        }
      });
 
  this.setState({
    things: newThings
  });
};
 addItem = name => {
    const newItem= {
      task: name,
      id: Date.now(),
      done: false
    };
    this.setState({
      things: [...this.state.things, newItem]
    });
  };

  clearDone = () => {
    this.setState({
      things: this.state.things.filter(task => !task.done)
    });
  };

  render(){
    return(
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} clearDone={this.clearDone}/>
        <div className="header">
          <h1>Todo List</h1>
        </div>
        <TodoList 
        things={this.state.things}
        toggleDone={this.toggleDone}
        />
      </div>
    );
  }
}

export default App;
