import React from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleLogin from 'react-google-login';

function App() {

  const responseGoogle = (response) => {
    console.log(response);
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
    </div>
  );
}

export default App;
