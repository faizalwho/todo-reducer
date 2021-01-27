import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Forms from './Forms';
import {
  Container
} from 'reactstrap';
import Todos from "./Todos";
import todoContext from "./contexts/todoContext";
import todoreducer from "./contexts/reducer";
import {useReducer} from 'react';



function App() {
  const [todos, dispatch] = useReducer(todoreducer, []);
  return (
  <todoContext.Provider value={{todos, dispatch}}>
  <Container style={{textAlign:"center"}} >
  <Todos />
  <Forms />
  </Container>
  </todoContext.Provider>
  );
}

export default App;
