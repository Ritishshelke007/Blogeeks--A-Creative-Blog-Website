import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import UserAuth from './pages/UserAuth'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/signin" element={<UserAuth type="sign-in" />} />
          <Route path="/signup" element={<UserAuth type="sign-up" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App