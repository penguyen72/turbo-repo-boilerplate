import axios from 'axios';
import Cookies from 'js-cookie';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="grid-item">
        <p className="form-success">User Successfully Signed Up</p>
        <p className="form-error">Could Not Sign Up User</p>
      </div>
      <div className="grid-item">
        <p className="form-success">User Successfully Logged In</p>
        <p className="form-error">Could Not Login User</p>
      </div>
      <div className="grid-item">
        <pre>{JSON.stringify({}, null, 2)}</pre>
      </div>
      <div className="grid-item">
        <pre>{JSON.stringify({}, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
