import './App.css';
import { Routes, Route, Navigate } from 'react-router';
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
import Footer from './components/footer/Footer';
import EditProduct from './pages/product/EditProduct'
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';


function App() {

  const {currentUser} = useContext(AuthContext);

  const RequireAuth = ({children}) => {
    return currentUser ? children : <Navigate to='/prihlaseni' />
  }

  return (
    <div className='app '>
    <Routes>
      <Route path='/'/>
      <Route path='prihlaseni' element={<Login />} />
      <Route 
        index 
        element={
        <RequireAuth>
          <Home />
        </RequireAuth>
        } />
      <Route path='uzivatele'>
        <Route index element={
          <RequireAuth>
            <ListUsers />
        </RequireAuth>
        } />
        <Route path=':userId' element={
          <RequireAuth>
            <Single />
        </RequireAuth>
        } />
        <Route path=':userId/upravit' element={
          <RequireAuth>
            <Single />
        </RequireAuth>
        } />
        <Route path='pridat' element={
          <RequireAuth>
        <New inputs ={userInputs} title='Přidat uživatele' />
        </RequireAuth>
        } />
      </Route>
      <Route path='produkty'>
        <Route index element={
          <RequireAuth>
        <ListProducts />
        </RequireAuth>
        } />
        <Route path=':id' element={
          <RequireAuth>
            <Single />
        </RequireAuth>
        } />
        <Route path=':id/upravit' element={
          <RequireAuth>
            <EditProduct />
        </RequireAuth>
        } />
        <Route path='pridat' element={
          <RequireAuth>
        <Addproduct/>
        </RequireAuth>
        } />
      </Route>
      <Route path='kategorie'>
        <Route index element={
          <RequireAuth>
            <ListCategories />
        </RequireAuth>
        } />
        <Route path=':categoryId' element={
          <RequireAuth>
        <Single />
        </RequireAuth>
        } />
        <Route path='pridat'element={
          <RequireAuth>
        <New inputs = {categoryInputs} title='Přidat kategorii'/>
        </RequireAuth>
        } />
      </Route>
      <Route path='objednavky'>
        <Route index element={
          <RequireAuth>
            <ListOrders />
        </RequireAuth>
        } />
        <Route path=':orderId' element={
          <RequireAuth>
            <Single />
        </RequireAuth>
        } />
      </Route>
      <Route path='doprava'>
      <Route index element={
        <RequireAuth>
          <ListDelivery />
      </RequireAuth>
      } />
        <Route path=':deliveryId' element={
          <RequireAuth>
            <Single />
        </RequireAuth>
        } />
        <Route path='pridat' element={
          <RequireAuth>
            <New inputs = {deliveryInputs} title='Přidat dopravce'/>
        </RequireAuth>
        } />
      </Route>
      <Route path='platba'>
      <Route index element={
        <RequireAuth>
          <ListPayments />
      </RequireAuth>
      } />
        <Route path=':paymentId' element={
          <RequireAuth>
            <Single />
        </RequireAuth>
        } />
        <Route path='pridat' element={
          <RequireAuth>
            <New inputs = {paymentInputs} title='Přidat platbu'/>
        </RequireAuth>
        } />
      </Route>
      <Route path='dokumenty'>
      <Route index element={
        <RequireAuth>
      <ListDocs />
      </RequireAuth>
      } />
        <Route path=':documentId' element={
          <RequireAuth>
        <Single />
        </RequireAuth>
        } />
        <Route path='pridat' element={
          <RequireAuth>
        <AddDocument />
        </RequireAuth>
        } />
      </Route>
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
