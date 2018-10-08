import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state={
    squares:[
      ['','',''],
      ['','',''],
      ['','','']
    ],
    player:'X'
  }

  handleUpdate=(row,col)=>{
    this.state.squares[row][col] = this.state.player==='X'?'X':'O'
    this.setState({squares:this.state.squares,player:this.state.player==='X'?'O':'X'})
    this.checkForWinner(row,col)
  }

  checkForWinner=(row,col)=>{
    const {squares,player} = this.state
    switch(true){
      case squares[0][0]===player&&squares[0][1]===player&&squares[0][2]===player: {
        this.winner()
        break
      }
      case squares[0][col]===player&&squares[1][col]===player&&squares[2][col]===player:{
        this.winner()
        break
      }
      case squares[0][0]===player&&squares[1][1]===player&&squares[2][2]===player:{
        this.winner()
        break
      }
      case squares[0][2]===player&&squares[1][1]===player&&squares[2][0]===player:{
        this.winner()
        break
      }
      default:return
    }
  }

  winner=()=>{
    alert(`${this.state.player} is the winner!`)
    this.setState({squares:[[null,null,null],[null,null,null],[null,null,null]]})
  }


  render() {
    return (
      <div className="App">
        {this.state.squares.map((elem1,i)=>(
          <div key={i}>
            {elem1.map((elem2,j)=>(
              <div key={j} onClick={()=>this.handleUpdate(i,j)} className="box inlineBox">
                <div className="item">
                  {elem2}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}


export default App;
