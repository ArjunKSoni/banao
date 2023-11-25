import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={<Home />} />
      {/* <Route exact path='/notes' element={<EditNote/>} />
      <Route exact path='/view' element={<View/>} />
      <Route exact path='/Login' element={<Login/>} />
      <Route exact path='/signin' element={<Signin/>} /> */}
      </Routes>
    </Router>
  );
}
export default App;