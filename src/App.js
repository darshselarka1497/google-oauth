import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleLogin from 'react-google-login';

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");


  const responseGoogle = (response) => {
    console.log(response);
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Google Login</h1>
      </header>
      <div>
            <GoogleLogin
              clientId="1092112084655-runh1vei6rcre98qp6n21ruv3baaif9j.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
        </div>
        <div>
          <h2>Welcome {name}</h2>
          <h2>Email: {email}</h2>
          <img src={url} alt={name}/>
        </div>
    </div>
  );
}

export default App;
