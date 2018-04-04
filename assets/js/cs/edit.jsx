import React from 'react'
import { connect } from 'react-redux';
import {Button, FormGroup,Label,Input} from 'reactstrap';
import api from '../api';
import {Route, Redirect, Link} from 'react-router-dom';

function Editform(params) {
  
    
    function update(ev) {
      let tgt = $(ev.target);
  
      let data = {};
      data[tgt.attr('name')] = tgt.val();
      let action = {
        type: 'UPDATE_TASK',
        data: data,
      };
      console.log(action);
      params.dispatch(action);
    }
  
    function submit() {
        api.submit_edittask(params.editform, params.editform.task_id);
        clear();
    }

    function clear() {
        let action = {
            type: 'CLEAR_FORM',
        };

        params.dispatch(action);
    }

    let users = _.map(params.users, (uu) =>
    <option key={uu.id} value={uu.id}>{uu.name}</option>);
    console.log(params);
    return <div style={{padding: "4px"}}>
    <h2>Edit Task </h2>
    <FormGroup>
         <Label for="title">Title</Label> 
         <Input type="textarea" name="title"  value={params.editform.title} onChange={update}></Input>
    </FormGroup>
    <FormGroup>
        <Label for="description">Description</Label> 
        <Input type="textarea" name="description"  value={params.editform.description} onChange={update}></Input>
    </FormGroup>
    <FormGroup>
        <Label for="user_id">Assignee</Label> 
        <Input type="select" name="user_id"  value={params.editform.user_id} onChange={update}>
        <option></option>
            {users}
        </Input>
    </FormGroup>
    <FormGroup>
        <Label for="completed">Task Completed</Label> 
        <Input type="checkbox" name="completed"  value={params.editform.completed} checked={params.editform.completed} onChange={update}></Input>
    </FormGroup>
    <FormGroup>
        <Label for="timetaken">Timetaken(In minutes)</Label> 
        <Input type="number" name="timetaken" step="15" min="0" value={params.editform.timetaken} onChange={update}></Input>
    </FormGroup> 
    <Button onClick={submit} color="primary">Submit</Button>
    </div>;

}

function state2props(state) {
    console.log("rerender", state);
    return { editform: state.editform };
  }
  
  // Export the result of a curried function call.
  export default connect(state2props)(Editform);