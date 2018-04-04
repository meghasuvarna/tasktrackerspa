import React from 'react';
import {Card, CardBody, Button} from 'reactstrap';
import {Link} from 'react-router-dom';

function Task(params) {
    let task = params.task;
    
    return <Card>
        <CardBody>
            <p><b>Assignee:</b> {task.user.name}</p>
            <p><b>Title:</b> {task.title}</p>
            <p><b>Description:</b> {task.description}</p>
            <p><b>Completed:</b> {task.complete
              ? "Complete"
              : "Incomplete"}</p>
            <p><b>Timetaken:</b> {task.timetaken}</p>
           
        </CardBody>
        </Card>
}

export default function Showtask(params) {

    let tasks = _.map(params.tasks, (pp) => <Task key={pp.id} task={pp} />);

    return <div>
        
        <h1>Task details:</h1>
        
        {tasks}
    </div>;
}