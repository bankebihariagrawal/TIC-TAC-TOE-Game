import React , {useState} from 'react';
import Board from './Component/game';
import {BrowserRouter , Route, Redirect} from 'react-router-dom';
import Player from './Component/Player';

function App() {
  const [users , setusers] = useState({
    Player1:'',
    Player2:''
  })
  const addusers = (user) => {
    setusers({
      user
    })
  }
  return (
    <BrowserRouter>
    <div className="App">
     <Route exact path="/" component={() => <Player addusers={addusers}/>} />
     <Route exact path="/game" component={() => <Board user={users} />} />
     <Redirect to="/" />
    </div>
    </BrowserRouter>
  );
}

export default App;
