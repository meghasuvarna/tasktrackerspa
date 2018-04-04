import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav  from './nav';
import Taskdetails from './taskdetails';
import Userlist from './userlist';
import Taskform from './taskform';
import Editform from './edit';
import Showtask from './showtask';
import {Link} from 'react-router-dom';

export default function tasktracker8_init(store) {
    ReactDOM.render(
        <Provider store={store}>
          <Tasktracker8 />
        </Provider>,
        document.getElementById('root'),
      );   
}

let Tasktracker8 = connect((state)=> state)((props) => {
    
        return(
        <Router>
        <div>
           <Nav />
           
            <Route path="/" exact={true} render={() =>
                <div>
                    <Link to={"/tasks/new"} className="btn btn-primary">
                      Create New Task</Link>
                 
                    <Taskdetails tasks={props.tasks} />
                    
                </div>
            } />

             <Route path="/users" exact={true} render={() =>
                <div>
                 <Userlist users={props.users} />
                   
                </div>
            } />

           

            <Route path="/users/:user_id" exact={true} render={({match}) =>
              <Taskdetails tasks={_.filter(props.tasks, (pp) => 
        
                    match.params.user_id == pp.user.id
           
               )} />
             } />

            <Route path="/tasks/:task_id" exact={true} render={({match}) =>
              <Showtask tasks={_.filter(props.tasks, (pp) => 
        
                    match.params.task_id == pp.id
           
               )} />
             } />
            <Route path="/tasks/new" exact={true} render={({match}) => 
                <Taskform users={props.users}/>}/>
                
            <Route path="/tasks/edit/:task_id" exact={true} render={() => 
                <Editform users={props.users}/>}/>
            </div>
        
        </Router>);
            
    });

