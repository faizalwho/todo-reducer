import React, {useContext} from 'react';
import {
    FaCheckCircle
} from 'react-icons/fa'
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import todoContext from './contexts/todoContext';
import {REMOVE_TODO} from './contexts/actions.types';


export default function Todos() {

    const [todos, dispatch] = useContext(todoContext)

    return (
        <div>
            <ListGroup className="mt-5 mb-2 items" >
            {todos.map(todo=>(
                <ListGroupItem key={todo.id}>
                 {todo.todostring}
                 <span className="float-right">
                 <FaCheckCircle onClick={()=>{
                    dispatch({
                        action:REMOVE_TODO,
                        payload:todo.id
                    })
                 }} />
                 </span>
            
            </ListGroupItem>
            ))}
            </ListGroup>
        </div>
    )
}
