import './App.css';

const API_BASE = 'http://localhost:8000/api';

function App() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-96 h-96 flex flex-col gap-4 bg-white shadow-lg rounded-lg p-6">
        <h1 className="font-bold text-2xl">todos</h1>

        <div>list todos here</div>
      </div>
    </div>
  );
}

export default App;
