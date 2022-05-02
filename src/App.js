import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Notes } from './components/Notes';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/notes-frontend' element={<Notes />}></Route>
        </Routes>
      </Router>
    </div>
  );
}