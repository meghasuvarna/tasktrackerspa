import React from 'react';
import {Card, CardBody, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import api from '../api';



function Task(params) {
    let task = params.task;
    
function deletetask(){
    api.deletetask(params.task, params.task.id);
  }

  function edittask(){
    api.edit_task_details(params.task.id)
  }
    return <Card>
        <CardBody>
            <p><b>Assignee:</b> {task.user.name}</p>
            <p><b>Title:</b> {task.title}</p>
            <p><b>Description:</b> {task.description}</p>
            <Link to={"/tasks/" + task.id} className="btn btn-primary">
                      Show Task</Link>
            
         <Button className="float-right" onClick={deletetask} color="danger">Delete Task</Button>
          <Link to={"/tasks/edit/" + task.id} onClick={edittask} className="btn btn-secondary float-right mr-2">
             Edit Task</Link>
        </CardBody>
        </Card>
}

export default function Taskdetails(params) {

    let tasks = _.map(params.tasks, (pp) => <Task key={pp.id} task={pp} />);

    return <div>
        
        <h1>Tasks</h1>
        
        {tasks}
    </div>;
}