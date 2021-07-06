import React, { Component } from 'react'

 class Habit extends Component {

    handleIncrement = () =>{
        this.props.onIncrement(this.props.habit);
    };
    handleDecrement = () =>{
        this.props.onDecrement(this.props.habit);

    }; 
    handleDelete =() =>{
        this.props.Delete(this.props.habit);

    };
    render() {
        const { name, count } = this.props.habit;
        return (
        <>
        <span className="hbit-name">{name}</span>
        <span className="hbit-count">{count}</span>
        <button className="habbit-button habit-increase" onClick={this.handleIncrement}>
            <i className="fas fa-plus-square"></i>
        </button>
        <button className="habbit-button habit-decrease" onClick={this.handleDecrement}>
            <i className="fas fa-minus-square"></i>
        </button>
        <button className="habbit-button habit-delete" onClick={this.handleDecrement}>
            <i className="fas fa-trash"></i>
        </button>
    
        </>
        );
        }
}

export default Habit
