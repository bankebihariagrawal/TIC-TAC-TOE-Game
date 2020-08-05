import React , {useState} from 'react';
import { useHistory} from "react-router-dom";
  
const Player = (props) => {
    let history = useHistory();
    const InitialState = {
        Player1:'',
        Player2:''
    }
    const handleChange = (e) => {
        e.preventDefault()
        setName({
            ...name,
            [e.target.id] : e.target.value.toUpperCase()
        })
    }
    const handleSubmit= (e) => {
        if(name.Player2 === name.Player1){
            alert('Please Write 2 different name')
        }
        e.preventDefault()
        props.addusers(name)
        setTimeout(() => {
        history.push('/game')
    }, 100);
    }
    const [name , setName] = useState(InitialState)
    
  
    return (
        <React.Fragment>
            <form className="player-name-form  text-center"  onSubmit={handleSubmit}>
                <div className="form-group text-center">
                    <label htmlFor="Player1">Player 1 Name</label><br />
                    <input type="text" className="" id="Player1" aria-describedby="emailHelp" value={name.Player1} onChange ={handleChange} required />
                </div>
                <div className="form-group text-center">
                    <label htmlFor="Player2">Player 2 Name</label><br />
                    <input type="text" className="" id="Player2" value={name.Player2} onChange ={handleChange} required/>
                </div>
                <br />
                <button type="submit" className="btn btn-primary text-center">Start Game</button>
            </form>
        </React.Fragment>
    );
}
 
export default Player;

