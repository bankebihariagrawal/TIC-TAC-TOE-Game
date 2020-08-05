import React from 'react';
import {  Link } from "react-router-dom";
import { Button , Modal , ModalBody , ModalHeader,
  ModalFooter} from 'reactstrap';
import Player from './Player';
// class Square extends React.Component {
//   render() {
//     return (
//       <div onClick={this.props.onClick}
//         className="square"
//         style={squareStyle}>
//       </div>
//     );
//   }
// }

  
class Board extends React.Component {
  Player2 = this.props.user.user.Player2 ||this.props.user.Player2
  Player1 = this.props.user.user.Player1 ||this.props.user.Player1
  
reset = () => {
  document.querySelector('.s1').innerHTML=""
  document.querySelector('.s2').innerHTML=""
  document.querySelector('.s3').innerHTML=""
  document.querySelector('.s4').innerHTML=""
  document.querySelector('.s5').innerHTML=""
  document.querySelector('.s6').innerHTML=""
  document.querySelector('.s7').innerHTML=""
  document.querySelector('.s8').innerHTML=""
  document.querySelector('.s9').innerHTML=""
  document.querySelector('.status').innerHTML = `Next Chance: ${this.Player1}`
  document.querySelector('.winner').innerHTML = "Winner: None"
  }
handleDraw = () => {
  if((document.querySelector('.s1').innerHTML==="X" || document.querySelector('.s1').innerHTML==="O") &&
    (document.querySelector('.s2').innerHTML==="X" || document.querySelector('.s2').innerHTML==="O") &&
    (document.querySelector('.s3').innerHTML==="X" || document.querySelector('.s3').innerHTML==="O") &&
    (document.querySelector('.s4').innerHTML==="X" || document.querySelector('.s4').innerHTML==="O") &&
    (document.querySelector('.s5').innerHTML==="X" || document.querySelector('.s5').innerHTML==="O") &&
    (document.querySelector('.s6').innerHTML==="X" || document.querySelector('.s6').innerHTML==="O") &&
    (document.querySelector('.s7').innerHTML==="X" || document.querySelector('.s7').innerHTML==="O") &&
    (document.querySelector('.s8').innerHTML==="X" || document.querySelector('.s8').innerHTML==="O") &&
    (document.querySelector('.s9').innerHTML==="X" || document.querySelector('.s9').innerHTML==="O")){
    alert('Oh! This game has no winner. Please Reset the game.')
    }
  }
handleClick = (e) => {    
    if(document.querySelector('.status').innerHTML === `Next Chance: ${this.Player1}` && (!e.target.innerHTML)){
    e.target.innerHTML = 'X'
    if(e.target.innerHTML = 'X'){
    e.target.classList.add('red')
    e.target.classList.remove('green')   
    }
    document.querySelector('.status').innerHTML = `Next Chance: ${this.Player2}`
    }
    else{
      if(!e.target.innerHTML){
    e.target.innerHTML = 'O'
    if(e.target.innerHTML = 'O'){
      e.target.classList.add('green')
      e.target.classList.remove('red')   
      }
    document.querySelector('.status').innerHTML = `Next Chance: ${this.Player1}`
    }
    }
    this.CheckWinner()
    setTimeout(() => {
    this.handleDraw()
  },100)
  }

handleWinner = (name) => {
  this.setState({
    ...this.state , 
    winner : name
  })
   this.toggleModal()
   this.reset()
  }
CheckWinner = (e) => {
  const lines = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
  ]
  for(let i=0 ; i<lines.length ; i++) {
    const [a,b,c] = lines[i];
      if(document.querySelector('.s'+a).innerHTML === document.querySelector(".s"+b).innerHTML && document.querySelector(".s"+a).innerHTML && document.querySelector(".s"+a).innerHTML === document.querySelector(".s"+c).innerHTML){
      if(document.querySelector(".s"+a).innerHTML === "X"){
        setTimeout(() => {
          this.handleWinner(this.Player1)  
        }, 100);
      }
      else{
        setTimeout(() => {
          this.handleWinner(this.Player2)  
        }, 100);
      }
      break
    } 
    else{
      document.querySelector('.winner').innerHTML = "Winner: None"
      
    }
  }
}

constructor(props) {
  super(props);
  
this.state = {
    isModalOpen:false,
    winner:null,
    isModalOpen1:true
  };
  this.toggleModal = this.toggleModal.bind(this);
}
toggleModal(){
  this.setState({
      isModalOpen : !this.state.isModalOpen
  })
}

render() {
    // return <Redirect to='/' />
  // }
console.log(this.props , this.Player2 , this.Player1)
return(

        <div className="gameBoard containerStyle">
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader>Winner</ModalHeader>
                    <ModalBody>
                     {this.state.winner} Won the game
                   </ModalBody>
                   <ModalFooter>
                     <Button onClick={this.toggleModal}>Restart the game</Button>
                     <Link to="/">
                      <Button>Go Back To Home</Button>
                     </Link>
                     
                   </ModalFooter>
        </Modal>
        
        <div className="status instructionsStyle">Next Chance: {this.Player1}</div>
        <div className="winner instructionsStyle">Winner: None</div>
        <button className="buttonStyle" onClick={this.reset}>Reset</button>
        <div className="boardStyle">
          <div className="board-row rowStyle">
           <div onClick={this.handleClick}   className="square s1 squareStyle" />
           <div onClick={this.handleClick}   className="square s2 squareStyle" />
           <div onClick={this.handleClick}   className="square s3 squareStyle" />
          </div>
          <div className="board-row rowStyle">
           <div onClick={this.handleClick}   className="square s4 squareStyle" />
           <div onClick={this.handleClick}   className="square s5 squareStyle" />
           <div onClick={this.handleClick}   className="square s6 squareStyle" />
          </div>
          <div className="board-row rowStyle">
           <div onClick={this.handleClick}   className="square s7 squareStyle" />
           <div onClick={this.handleClick}   className="square s8 squareStyle" />
           <div onClick={this.handleClick}   className="square s9 squareStyle" />
          </div>
        </div>
      </div>
)
  }
}


export default Board

// 2nd challenge
// import React,{useState} from 'react';
// import ReactDOM from 'react-dom';

// const style = {
//   table: {
//     borderCollapse: 'collapse',
//   },
//   tableCell: {
//     border: '1px solid gray',
//     margin: 0,
//     padding: '5px 10px',
//     width: 'max-content',
//     minWidth: '150px'
//   },
//   form: {
//     container: {
//       padding: '20px',
//       border: '1px solid #F0F8FF',
//       borderRadius: '15px',
//       width: 'max-content',
//       marginBottom: '40px'
//     },
//     inputs: {
//       marginBottom: '5px'
//     },
//     submitBtn: {
//       marginTop: '10px',
//       padding: '10px 15px',
//       border:'none',
//       backgroundColor: 'lightseagreen',
//       fontSize: '14px',
//       borderRadius: '5px'
//     }
//   }
// }

// function PhoneBookForm(props) {
// const {data ,onChange , onSubmit} = props
// const list = `<tr><th>`+data.userFirstname+`</th><th>`+data.userLastname+`</th><th>`+data.userPhone+`</th></tr>`
//   return (
//     <div>
//     <form onSubmit={e => onSubmit(e)} style={style.form.container}>
//       <label>First name:</label>
//       <br />
//       <input 
//         style={style.form.inputs}
//         className='userFirstname'
//         name='userFirstname' 
//         type='text'
//         onChange={e => onChange(e)}
//         value={data.userFirstname}
//       />
//       <br/>
//       <label>Last name:</label>
//       <br />
//       <input 
//         style={style.form.inputs}
//         className='userLastname'
//         name='userLastname' 
//         type='text' 
//         onChange={e => onChange(e)}
//         value={data.userLastname}
//       />
//       <br />
//       <label>Phone:</label>
//       <br />
//       <input
//         style={style.form.inputs}
//         className='userPhone' 
//         name='userPhone' 
//         type='text'
//         onChange={e => onChange(e)}
//         value={data.userPhone}
//       />
//       <br/>
//       <input 
//         style={style.form.submitBtn} 
//         className='submitButton'
//         type='submit' 
//         value='Add User' 
//       />
//     </form>
       
//    </div>
//   )
// }

// function InformationTable(props) {
//   return (
//     <table style={style.table} className='informationTable'>
//       <thead> 
//         <tr>
//           <th style={style.tableCell}>First name</th>
//           <th style={style.tableCell}>Last name</th>
//           <th style={style.tableCell}>Phone</th>
//         </tr>
//              {props.children} 
//       </thead>
//     </table>
//   );
// }

// function Application(props) {
//   const [data , setdata] = useState({
//     userFirstname: "Coder",
//     userLastname:"Byte",
//     userPhone:8885559999
//   })
//   const handleChange = (e) => {
//     setdata({...data , [e.target.name]: e.target.value})
//   }
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const list = `<tr><th>`+data.userFirstname+`</th><th>`+data.userLastname+`</th><th>`+data.userPhone+`</th></tr>`
//   }
//   return (
//     <section>
//       <PhoneBookForm data = {data} onChange ={e => handleChange(e)} onSubmit = {e => handleSubmit(e)} />
//       <InformationTable>
//       <tr>
//       <th>{data.userFirstname}</th>
//       <th>{data.userLastname}</th>
//       <th>{data.userPhone}</th>
//       </tr>
//       </InformationTable>

//     </section>
//   );
// }

// ReactDOM.render(
//   <Application />,
//   document.getElementById('root')
// );