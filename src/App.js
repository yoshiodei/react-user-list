import './App.css';
import Users from './Components/Users';
import UsersForm from './Components/UsersForm'; 
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState( [
            { name: "Lionel Messi", email: "leo@email.com", gen: 18 },
            { name: "Eden Hazard", email: "eden@email.com", gen: 16 },
            { name: "Neymar Jnr", email: "ney@email.com", gen: 18 }
                ])

  const handleAddUser = (newUser)=> {
    setUsers([...users, newUser]);
  }

  return (
    <div className="App">
      <UsersForm addUser={handleAddUser}/>
      <Users users={users}/>
    </div>
  );
}

export default App;
