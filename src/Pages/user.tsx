import React, {useContext} from 'react'
import { UserContext } from '../context/userContext'

const User = () => {
    const userContext = useContext(UserContext)

    const addUser = () => {
       userContext.setUser({
        name:'anish',
        email:'anish@gmail.com'
       })
    }

  return (
    <div>
        <div className="users">
           <p>User name is {userContext?.user?.name}</p>
        </div>
        <button onClick={addUser}>Add User</button>
    </div>
  )
}

export default User