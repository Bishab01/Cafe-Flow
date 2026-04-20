import { Routes, Route } from 'react-router-dom'
import Login from './login/selectRole.jsx'
import LoginScreen from './login/loginScreen.jsx'
import Sidebar from './sidebar.jsx'

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/sidebar" element={<Sidebar />} />
    </Routes>
    {/*<Testing/>*/}
    </>
  )
}

export default App