import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import About from './About.tsx';

createRoot(document.getElementById('root')!).render(<App />);
createRoot(document.getElementById('root-about')!).render(<About />);
