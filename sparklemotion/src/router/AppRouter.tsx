import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LanguageToggle from '@/components/Buttons/LanguageToggle';
import SignUp from '@/components/SignUp/SignUp';
import SparkleMotion from '@/components/SparkleMotion';
import LoginOne from '@/components/Login/Login';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/sparkle" element={<SparkleMotion />} />
        <Route path="/login" element={<LoginOne />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
