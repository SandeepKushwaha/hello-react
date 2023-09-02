import logo from './logo.svg';
import './App.css';

function App() {

  let message = 'React';
  const isLoggedin = true;

  if (isLoggedin) {
    return <p>You Have Logged in.</p>
  }

  return (
    <div className="App">
      <div>
        <p>Hello {isLoggedin ? message : 'World!'} </p>
        <p>{ isLoggedin && 'Welcome to React'}</p>
      </div>
    </div>
  );
}

export default App;
