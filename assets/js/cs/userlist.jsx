import React from 'react';
import {Link} from 'react-router-dom';


export default function Userlist(params) {

    let users = _.map(params.users, (uu) => 
    <li key={uu.id}>
    <Link to={"/users/" + uu.id}>
    {uu.name}
    </Link>
    </li>);
   

    return <div>
        <p> &nbsp; </p>
        <h1>All Users</h1>
        {users}
    </div>;
}