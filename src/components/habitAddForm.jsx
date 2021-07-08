import React, { Component } from 'react'

class HabitAddForm extends Component {
    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = event => { 
        event.preventDefault();
        const name = this.inputRef.current.value;
        //name 있다면? 
        name && this.props.onAdd(name);
    }
    
    render() {
        return (
           <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
               <input
               ref = {this.inputRef} 
               type="text" 
               className="add-input" 
               placeholder="Habit" />
               <button className="add-button">add</button>
           </form>
        )
    }
}
export default HabitAddForm;
