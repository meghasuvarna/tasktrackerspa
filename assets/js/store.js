import { createStore, combineReducers } from 'redux';
import deepFreeze from 'deep-freeze';

/*
 *  state layout:
 *  {
 *   tasks: [... Tasks ...],
 *   users: [... Users ...],
 *   form: {
 *     user_id: null,
 *     title: "",
 *     description: "",
 *     completed: false,
 *     timetaken: 0,
 *   }
 * }
 *
 * */

function tasks(state = [], action) {
    const state2 = Object.assign([], state);
    switch (action.type) {
        case 'TASKS_LIST':
          return [...action.tasks];
        case 'ADD_TASK':
          return [action.task, ...state];
        case 'SUBMIT_UPDATE_TASK':
        console.log("actionnn " , action )
        const taskId = state.findIndex(tasks => {
            return tasks.id == action.task.id;
        })
        state2.splice(taskId, 1);
        return [action.task, ...state2];
        default:
          return state;
        case 'DELETE_TASK':
        const taskId2 = state.findIndex(tasks => {
          return tasks.id == action.task.id;
        })
        state2.splice(taskId2, 1);
         return state2;
        }
        
}

function users(state = [], action) {
    switch (action.type) {
        case 'USERS_LIST':
          return [...action.users];
        default:
          return state;
        }
}

let empty_form = {
  user_id: "",
  title: "",
  description: "",
  completed: false,
  timetaken: "",
  token: "",

};

function token(state = null, action) {
  switch (action.type) {
    case 'SET_TOKEN':
      return action.token;
    default:
      return state;
  }
}

let empty_login = {
  email: "",
  pass: "",
};

function login(state = empty_login, action) {
  switch (action.type) {
    case 'UPDATE_LOGIN_FORM':
      return Object.assign({}, state, action.data);
    default:
      return state;
  }
}

function form(state = empty_form, action) {
  switch (action.type) {
    case 'UPDATE_FORM':
      return Object.assign({}, state, action.data);
    case 'CLEAR_FORM':
      return empty_form;
      case 'SET_TOKEN':
      return Object.assign({}, state, action.token);
    default:
      return state;
  }
}


function editform(state = empty_form, action) {
    switch (action.type) {
      case 'CLEAR_FORM':
        return empty_form;
      case 'UPDATE_TASK':
        return Object.assign({}, state, action.data);
      case 'EDIT_TASKDETAIL':
        return  Object.assign({}, state, action.task);
  
      default:
        return state;
    }
  }

function root_reducer(state0, action) {
  console.log("reducer", action);
  // {tasks, users, form} is ES6 shorthand for
  // {tasks: tasks, users: users, form: form}
  let reducer = combineReducers({tasks, users, form, editform, login, token});
  let state1 = reducer(state0, action);
  console.log("state1", state1);
  return deepFreeze(state1);
};

let store = createStore(root_reducer);
export default store;