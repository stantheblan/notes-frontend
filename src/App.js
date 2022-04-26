import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Notes } from './components/Notes';
import { New } from './components/New';
import { Show } from './components/Show';
import { Edit } from './components/Edit';

export default function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to='/'> ~Home </Link>
          <Link to='/new'> ~New</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Notes />}></Route>
          <Route path='/:id' element={<Show />}></Route>
          <Route path='/new' element={<New />}></Route>
          <Route path='/:id/edit' element={<Edit />}></Route>
        </Routes>
      </Router>
    </div>
  );
}