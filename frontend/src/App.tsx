import React, {useEffect, useState} from 'react';
import api from './services/api';

import User from './components/User';

interface IUser {
  name:string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(()=> {
    async function loadUsers(){
      const response = await api.get<IUser[]>('/users');
      console.log(response)
      setUsers(response.data);
    }

    loadUsers();
  }, []);

  return (
    <div className="App">
      {users.map(user => 
        <User key={user.email} user={user}/>)}
    </div>
  );
}

export default App;
