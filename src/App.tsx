import { FC, useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useSearchParams,
} from 'react-router';

function App() {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  console.log('location', location);
  console.log('searchParams', searchParams);
  const [count, setCount] = useState(0);
  const testData = localStorage.getItem('TEST_DATA');

  console.log('react localStorage', testData);
  const URL = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())

      .then((response) => {
        console.log(response);
      });
  };

  return (
    <>
      <div>
        <button type="button" onClick={() => localStorage.clear()}>
          Clear storage
        </button>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" loading="lazy" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="logo react"
            loading="lazy"
            alt="React logo"
          />
        </a>
        <a href={'/about'} />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

const Wrapper: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Wrapper;
