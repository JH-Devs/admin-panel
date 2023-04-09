import './App.css';
import { Routes, Route } from 'react-router';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';

function App() {
  return (
    <>
    <Routes>
      <Route path='/'/>
      <Route index element={<Home />} />
      <Route path='prihlaseni' element={<Login />} />
      <Route path='uzivatele'>
        <Route index element={<List />} />
        <Route path=':userId' element={<Single />} />
        <Route path='pridat' element={<New />} />
      </Route>
      <Route path='produkty'>
        <Route index element={<List />} />
        <Route path=':productId' element={<Single />} />
        <Route path='pridat' element={<New />} />
      </Route>
      <Route path='kategorie'>
        <Route index element={<List />} />
        <Route path=':categoryId' element={<Single />} />
        <Route path='pridat' element={<New />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
