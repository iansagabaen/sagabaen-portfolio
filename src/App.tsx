import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PodcastPage from './pages/PodcastPage';
import MediaAIQuestionsPage from './pages/MediaAIQuestionsPage';
import MediaHowWeUseAIPage from './pages/MediaHowWeUseAIPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/podcast" element={<PodcastPage />} />
        <Route path="/press/ai-questions-answered" element={<MediaAIQuestionsPage />} />
        <Route path="/press/how-we-use-ai" element={<MediaHowWeUseAIPage />} />
      </Routes>
    </Router>
  );
}
