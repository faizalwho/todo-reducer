import React, {useState, useContext} from 'react';
import {
    Input,
    InputGroup,
    Button,
    InputGroupAddon,
    Form,
    FormGroup
} from 'reactstrap';
import {v4} from 'uuid';
import todoContext from './contexts/todoContext';
import {ADD_TODO} from "./contexts/actions.types";


export default function Forms() {

    const[todostring, settodoString] = useState("");
    const {dispatch} = useContext(todoContext);
    const handlesubmit = e =>{
        e.preventDefault();
        if(todostring === ""){
            alert("Please dont leave this empty");
        }
        const  todo={
            todostring,
            id:v4()
        }
        dispatch({
            action:ADD_TODO,
            payload:todo
        })
        settodoString("")
    }

    return (
        <div style={{
            marginTop:"300px"
        }} >
            <Form onSubmit={handlesubmit} >
           <FormGroup>
           <InputGroup>
           <Input
           type="text"
           id="todo"
           name="todo"
           value={todostring}
           onChange={e=> settodoString(e.target.value)}
           placeholder="username" />
           <InputGroupAddon addonType="append">
            <Button>ADD</Button>
           </InputGroupAddon>
         </InputGroup>
           </FormGroup>

          
            </Form>
        </div>
    )
}
