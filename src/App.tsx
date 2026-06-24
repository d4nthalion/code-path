import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Dashboard } from './pages/Dashboard';
import { LessonPage } from './pages/LessonPage';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <BrowserRouter>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Dashboard theme={theme} />} />
        <Route path="/lesson/:topicId/:langId" element={<LessonPage theme={theme} />} />
      </Routes>
    </BrowserRouter>
  );
}
