import './App.css';
import ToDo from './components/ToDo';

function App() {
  return (
    <div className='bg-dark text-white min-w-100 min-vh-100'>
      <div className="container">
        <ToDo />
      </div>
    </div>
    
  );
}

export default App;
