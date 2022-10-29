import React from 'react'
// import {MdDeleteForever} from "react-icons/md";
import axios from 'axios';
import { HiTrash } from "react-icons/hi";


const TaskList = ({task, getTask}) => {


  const deleteTask=async(id) =>{
  const url ="https://635a951e6f97ae73a63139c4.mockapi.io/api/gorevler" 
  try {
    await axios.delete(`${url}/${id}`);
  } catch (error) {
    
  }
  }

   
  getTask();


  return (
    <div>
      {task.map((item)=> {
        const {id, task, date} = item;
        return(
          <div className='mt-2 d-flex justify-content-between align-items-center rounded-2 p-1' style={{
            backgroundColor:"#a225bea6",
      
          }}>
            <div>
              <h5>{task}</h5>
              <p>{date}</p>
            </div>
            <div>
              <HiTrash
              onClick={()=> deleteTask(id)}
              style={{
                cursor:"pointer",
                marginRight:"10px",
                fontSize:"2rem",
                boxShadow:"2px 2px 4px #be5525"
              }} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TaskList;


// MdDeleteForever