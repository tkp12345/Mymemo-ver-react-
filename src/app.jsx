import React, { Component } from "react";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

import "./app.css";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

 handleIncrement = (habit) =>{ 
            //기존 habit (배열) 을 할당한다 
            const habits = [...this.state.habits];
            //받은배열에서  현재 매개변수로 받은 habit 이 있는원소를 찾는다 
            const index = habits.indexOf(habit);
            //찾은 원소 에 count 를 하나 증가시켜준다 
            habits[index].count++;
            //기존 state 를 변경해준다 
            this.setState({ habits: habits})
            // this.setState({ habits}) : 변수명같을땐 이것도 가능 
        }
        handleDecrement = (habit) =>{
            const habits = [...this.state.habits];
            const index = habits.indexOf(habit);
            const count = habits[index].count -1;
            habits[index].count = count <0 ? 0 : count; //별로인 코드 
            this.setState({ habits: habits})
        }
        handleDelete =(habit) =>{
            // 배열 요소를 삭제 해야함 
            // 배열 id 와 habit 과 일치하지 않는 id  모아서 배열을 만든다 
            const habits  = this.state.habits.filter(item => item.id != habit.id );
            this.setState({habits});
        };
        //새로운 이름을 받아 habit 에 추가한다 
        handleAdd = name => { 
          //새로운 배열에 복사 
          const habits = [...this.state.habits, {id: Date.now(), name, count: 0 }];
          this.setState({habits});
        }
  render() {
    return (
      <>
    <Navbar 
       totalCount = { this.state.habits.filter(item => item.count >0).length}
    />
    <Habits 
    habits={this.state.habits}
    onIncrement ={this.handleIncrement}
    onDecrement ={this.handleDecrement}
    onDelete ={this.handleDelete}
    onAdd={this.handleAdd}
   />
    </>
    );
  }
}

export default App;
