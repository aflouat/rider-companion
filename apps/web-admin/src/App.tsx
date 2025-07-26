import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/Admin/AdminDashboard';
import ProfileValidation from './components/Admin/ProfileValidation';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/validate-profile" element={<ProfileValidation />} />
        </Routes>
      </Router>
  );
}

export default App;