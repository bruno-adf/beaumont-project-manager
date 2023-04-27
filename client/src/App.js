import './reset.css'
import SignIn from './pages/login/Page.jsx'
import Projects from './pages/projects/Page.jsx'
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom'

function App() {

  /* const PrivateRoutes = () => {
    const user = '1'

    return user ? <Outlet /> : <Navigate to='/signup' />
  } */

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/projects' element={<Projects />} />
          <Route path='/signin' element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
