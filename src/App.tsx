
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Page from './layouts/DashboardLayout';
import LoginPage from './pages/loginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} /> 
        <Route path="/login" element={<LoginPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
