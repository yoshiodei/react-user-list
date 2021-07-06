import React from 'react';

const Users = ({users}) => {
    return (
        <div>
            { users.map((user, index) => { return (
                <div key={index}>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Gen: {user.gen}</p>
                <hr />
            </div> 
            )})} 
        </div>
    );
}

export default Users;



