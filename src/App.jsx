// src/App.jsx
import Header from './components/Header';
import Buttons from './components/Buttons';
import FormControlComponent from './components/FormControl';

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <Header />
      
      <main className="flex-grow-1">
        <Buttons />
      </main>
      
      <footer className="py-4 bg-dark">
        <FormControlComponent />
      </footer>
    </div>
  );
}

export default App;