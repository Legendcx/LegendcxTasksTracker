import axios from 'axios';
import React,{useState} from 'react';
import Button  from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
// import axios from "axios";


const AddTask = ({getTask}) => {

  const [task, setTask] = useState("")
  const [date, setDate] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask ={task, date}
    // console.log("task geldi mi", task);
    // console.log("date", date);
    addNewTask(newTask)
    setTask("");
    setDate("");

  }

  const addNewTask = async (newTask) => {
    const url ="https://635a951e6f97ae73a63139c4.mockapi.io/api/gorevler" 
    try {
      await axios.post(url,newTask)
      
    } catch (error) {
      
    }
    getTask();
  }

 

 return (
  
    <div>
      <Form onSubmit={handleSubmit} >
      <Form.Group className="mb-3 fw-bold" controlId="formBasicEmail">
        <Form.Label>Task</Form.Label>
        <Form.Control type="text" placeholder="Enter task"
        onChange={(e)=> setTask(e.target.value)}/>
      </Form.Group>

      
      <Form.Group className="mb-3 fw-bold" controlId="formBasicPassword">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date"
        onChange={(e)=> setDate(e.target.value)}/>
      </Form.Group>
    <div className="text-center">
      <Button variant="danger w-50 " type="submit">
        SAVE
      </Button>
      </div>
    </Form>
    </div>
  )
}

export default AddTask