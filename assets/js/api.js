import store from './store';

class TheServer {


  request_tasks() {
    $.ajax("/api/v1/tasks", {
      method: "get",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      success: (resp) => {
        store.dispatch({
          type: 'TASKS_LIST',
          tasks: resp.data,
        });
      },
    });
  }

  request_users() {
    $.ajax("/api/v1/users", {
      method: "get",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      success: (resp) => {
        store.dispatch({
          type: 'USERS_LIST',
          users: resp.data,
        });
      },
    });
  }

  submit_task(data) {
    $.ajax("/api/v1/tasks", {
      method: "post",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify({ token: data.token, task: data }),
      success: (resp) => {
        store.dispatch({
          type: 'ADD_TASK',
          task: resp.data,
        });
      },
    });
  }

  submit_login(data) {
  console.log(data)
    $.ajax("/api/v1/token", {
      method: "post",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify(data),
      success: (resp) => {
        console.log("response2", resp)
        store.dispatch({
          type: 'SET_TOKEN',
          token: resp,
        });
      },
    });
  }

  deletetask(data, id) {
    $.ajax("/api/v1/tasks" + "/" + id, {
      method: "delete",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: "",
      success: (resp) => {
        console.log("here in the response", resp);
        store.dispatch({
          type: 'DELETE_TASK',
          task: id,
        });
      },
    });
  }

  submit_edittask(data, id) {
    $.ajax("/api/v1/tasks" + "/" + id, {
      method: "put",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: JSON.stringify({ task: data }),
      success: (resp) => {
        console.log("here in the response", resp);
        store.dispatch({
          type: 'SUBMIT_UPDATE_TASK',
          task: resp.data,
        });
      },
    });
  }

  edit_task_details(id) {
      console.log("edit dets"  + id);
    $.ajax("/api/v1/tasks" + "/" + id, {
      method: "get",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: "",
      success: (resp) => {
          let taskdetails = {
              title: resp.data.title,
              description: resp.data.description,
              user_id: resp.data.user.id,
              completed: resp.data.completed,
              timetaken: resp.data.timetaken,
              task_id: resp.data.id
          };
          console.log("here in the response"  + resp);
         store.dispatch({
          type: 'EDIT_TASKDETAIL',
          task: taskdetails
        });
      },
    });
  }


}

export default new TheServer();