import { useState } from "react"
import axios from "axios";
const LoginForm =() =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async(event)=>{
       event.preventDefault();

       const authObject = { 'Project-Id':"069f0d8f-749a-433e-8f5d-1ab0dbb057d6", 'User-Name': username, 'User-Secret':password }
       try {
           axios.get('https://api.chatengine.io/chats' ,{headers: authObject});
           localStorage.setItem('username' , username);
           localStorage.setItem('password' , password);

           window.location.reload();

       } catch (error) {
          setError('Oh Oh.. Incorrect credentials..  ' );
       }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title"> Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)}   className="input" placeholder="User Name" required  />
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}   className="input" placeholder="PassWord" required  />
                    <div align="center">
                      <button type="submit" className="button">
                          <span>Start Chatting</span>

                      </button>

                    </div>
                </form>
            </div>               

        </div>
    )
}
export default LoginForm;