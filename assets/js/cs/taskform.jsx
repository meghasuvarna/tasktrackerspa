import React from 'react'
import { connect } from 'react-redux';
import {Button, FormGroup,Label,Input} from 'reactstrap'
import api from '../api';

function Taskform(params) {
    function update(ev) {
      let tgt = $(ev.target);
  
      let data = {};
      data[tgt.attr('name')] = tgt.val();
      let action = {
        type: 'UPDATE_FORM',
        data: data,
      };
      console.log(action);
      params.dispatch(action);
    }
  
    function submit() {
        api.submit_task(params.form);
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

    return <div style={{padding: "4px"}}>
    <h2>Create Task </h2>
    <FormGroup>
         <Label for="title">Title</Label> 
         <Input type="textarea" name="title"  value={params.form.title} onChange={update}></Input>
    </FormGroup>
    <FormGroup>
        <Label for="description">Description</Label> 
        <Input type="textarea" name="description"  value={params.form.description} onChange={update}></Input>
    </FormGroup>
    <FormGroup>
        <Label for="user_id">Assignee</Label> 
        <Input type="select" name="user_id"  value={params.form.user_id} onChange={update}>
        <option></option>
            {users}
        </Input>
    </FormGroup>
    <FormGroup>
        <Label for="completed">Task Completed</Label> 
        <Input type="checkbox" name="completed"  value={params.form.completed} onChange={update}></Input>
    </FormGroup>
    <FormGroup>
        <Label for="timetaken">Timetaken(In minutes)</Label> 
        <Input type="number" name="timetaken" step="15" min="0" value={params.form.timetaken} onChange={update}></Input>
    </FormGroup> 
    <Button onClick={submit} color="primary">Create Task</Button>
    </div>;

}

function state2props(state) {
    console.log("rerender", state);
    return { form: state.form };
  }
  
  // Export the result of a curried function call.
  export default connect(state2props)(Taskform);