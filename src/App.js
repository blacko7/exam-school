import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useReducer } from 'react';
import Counter from './pages/CustomCounter';
import Home from './pages/Home';
import NotFound from './pages/Test';
import Navbar from './components/Navbar';


export default function App() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      // eslint-disable-next-line
      switch (action.type) {
        case 'increment':
          return { count: state.count + 1 };
        case 'decrement':
          return { count: state.count - 1 };
        case 'reset':
          return { count: 0 };
        case 'set':
          return { count: action.valued.target.value };
      }
    },
    { count: 0 }
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="counter" element={<Counter state={state} dispatch={dispatch} />} />
          
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}