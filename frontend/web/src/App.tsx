import axios from 'axios';
import Cookies from 'js-cookie';
import './App.css';

function App() {
  return (
    <div className="grid grid-cols-2 h-full bg-gray-100 gap-1">
      <div className="flex flex-col bg-white items-center">
        <p className="text-2xl font-bold my-12">Sign In</p>
      </div>
      <div className="flex flex-col bg-white items-center">
        <p className="text-2xl font-bold my-12">Cars</p>
      </div>
    </div>
  );
}

export default App;
