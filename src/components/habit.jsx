import React, { Component } from 'react'

 class Habit extends Component {
    render() {
        return (
        <>
        <span className="hbit-name">habbit</span>
        <span className="hbit-count">8</span>
        <button className="habbit-button habit-increase">
            <i className=" fas fa-plus-square"></i>
        </button>
        <button className="habbit-button habit-decrease">
            <i className=" fas fa-minus-square"></i>
        </button>
        <button className="habbit-button habit-delete">
            <i className=" fas fa-trash"></i>
        </button>
    
        </>
        );
        }
}

export default Habit
