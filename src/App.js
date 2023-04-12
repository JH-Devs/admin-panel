import './App.css';
import { Routes, Route } from 'react-router';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Single from './pages/single/Single';
import New from './pages/new/New';
import { deliveryInputs, paymentInputs, userInputs, categoryInputs } from './formsource.js';
import Addproduct from './pages/product/AddProduct';
import AddDocument from './pages/documents/AddDocument';
import ListProducts from './pages/list/ListProducts';
import ListCategories from './pages/list/ListCategories';
import ListOrders from './pages/list/ListOrders';
import ListDelivery from './pages/list/ListDelivery';
import ListPayments from './pages/list/ListPayments';
import ListUsers from './pages/list/ListUsers';
import ListDocs from './pages/list/ListDocs';

function App() {
  return (
    <>
    <Routes>
      <Route path='/'/>
      <Route index element={<Home />} />
      <Route path='prihlaseni' element={<Login />} />
      <Route path='uzivatele'>
        <Route index element={<ListUsers />} />
        <Route path=':userId' element={<Single />} />
        <Route path='pridat' element={<New inputs ={userInputs} title='Přidat uživatele' />} />
      </Route>
      <Route path='produkty'>
        <Route index element={<ListProducts />} />
        <Route path=':productId' element={<Single />} />
        <Route path='pridat' element={<Addproduct/>} />
      </Route>
      <Route path='kategorie'>
        <Route index element={<ListCategories />} />
        <Route path=':categoryId' element={<Single />} />
        <Route path='pridat'element={<New inputs = {categoryInputs} title='Přidat kategorii'/>} />
      </Route>
      <Route path='objednavky'>
        <Route index element={<ListOrders />} />
        <Route path=':orderId' element={<Single />} />
      </Route>
      <Route path='doprava'>
      <Route index element={<ListDelivery />} />
        <Route path=':deliveryId' element={<Single />} />
        <Route path='pridat' element={<New inputs = {deliveryInputs} title='Přidat dopravce'/>} />
      </Route>
      <Route path='platba'>
      <Route index element={<ListPayments />} />
        <Route path=':paymentId' element={<Single />} />
        <Route path='pridat' element={<New inputs = {paymentInputs} title='Přidat platbu'/>} />
      </Route>
      <Route path='dokumenty'>
      <Route index element={<ListDocs />} />
        <Route path=':documentId' element={<Single />} />
        <Route path='pridat' element={<AddDocument />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
