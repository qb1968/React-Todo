import React, {Component} from "react";

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            newItem: ""
        };
    }
        handleChanges = e => {
        this.setState({
            newItem: e.target.value
        });
    };
        handleSubmit = e => {
            e.preventDefault();

            this.props.addItem(this.state.newItem);
            this.setState({newItem: ""});
            console.log("It works!")
    };
    render() {
        console.log("rendering form");
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="item">New Item</label>
                <input
                type="text"
                name="item"
                id="item"
                value={this.state.newItem}
                onChange={this.handleChanges}
                />
                <button>Add</button>
                <button>Clear</button>
            </form>
        );
    }
}
    

export default TodoForm;