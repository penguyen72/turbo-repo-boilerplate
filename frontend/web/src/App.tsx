import axios from 'axios';
import Cookies from 'js-cookie';
import './App.css';

const DEFAULT_CARS: any[] = [];

function App() {
  return (
    <div className="grid h-full grid-cols-2 gap-1 bg-gray-100">
      <div className="flex flex-col items-center bg-red-600">
        <div className="flex flex-col items-center gap-4 my-auto">
          <p className="text-2xl font-bold">Sign In</p>
          <input className="px-4 py-2 border rounded-md" placeholder="Username" type="text" />
          <input className="px-4 py-2 border rounded-md" placeholder="Password" type="password" />
          <button className="px-4 py-2 bg-white border rounded-md">Sign In</button>
        </div>
      </div>
      <div className="flex flex-col items-center bg-white">
        <p className="my-12 text-2xl font-bold">Cars</p>
        <pre>{JSON.stringify(DEFAULT_CARS, null, 4)}</pre>
      </div>
    </div>
  );
}

export default App;
