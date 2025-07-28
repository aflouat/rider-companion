import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/Admin/AdminDashboard';
import ProfileValidation from './components/Admin/ProfileValidation';
import Orders from "./components/Admin/Orders";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/validate-profile" element={<ProfileValidation />} />
            <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>
  );
}

export default App;