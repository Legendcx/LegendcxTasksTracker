import React from "react";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Show Task Bar");
  const [task, setTask] = useState([]);

  const url = "https://635a951e6f97ae73a63139c4.mockapi.io/api/gorevler";

  const toggle = () => {
    setIsOpen(!isOpen);
    const buttonText = isOpen ? "Show Task Bar" : "Hide Task Bar";
    setText(buttonText);
  };

  // CRUD - READ
  const getTask = async () => {
    const { data } = await axios(url);
    setTask(data);
    console.log(data);
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className="mt-4 d-flex justify-content-center flex-column">
      <Button
       onClick={() => {toggle()}} variant="danger" size="lg">
        {text}
      </Button>

      {isOpen && <AddTask getTask={getTask} />}
     
      <TaskList task={task} getTask={getTask} />
    </div>
  );
};

export default Home;
