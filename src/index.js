import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";


// Component

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import Home from './Home';

import Login from './components/Login/Login';
// import components from administrator 
import NavBarAdm from './components/UserAdministrator/NavBar/NavBar';
// Services
import ServiceListAdm from './components/UserAdministrator/Services/ServiceList';
import ServiceFormAdm from './components/UserAdministrator/Services/ServiceForm';
import ServiceUpdateAdm from './components/UserAdministrator/Services/ServiceUpdate';
// Vet
import VetListAdm from './components/UserAdministrator/Vet/VetList';
import VetFormAdm from './components/UserAdministrator/Vet/VetForm';
import VetUpdateAdm from './components/UserAdministrator/Vet/VetUpdate';
// Cashier
import CashierListAdm from './components/UserAdministrator/Cashier/CashierList';
import CashierFormAdm from './components/UserAdministrator/Cashier/CashierForm';
import CashierUpdateAdm from './components/UserAdministrator/Cashier/CashierUpdate';

// import components from Vet 
import NavBarVet from './components/UserVet/NavBar/NavBar';
import ServiceListVet from './components/UserVet/Services/ServiceList';
import PetListVet from './components/UserVet/Pets/PetsList';
import RecordListVet from './components/UserVet/Record/RecordList';
import RecordFormVet from './components/UserVet/Record/RecordForm';

// import components from Cashier

import NavBarCashier from './components/UserCashier/NavBar/NavBar';
import PetListCashier from './components/UserCashier/Pets/PetsList';
import PetFormCashier from './components/UserCashier/Pets/PetForm';
import PetUpdateCashier from './components/UserCashier/Pets/PetUpdate';
import OwnerListCashier from './components/UserCashier/Owner/OwnerList';
import OwnerFormCashier from './components/UserCashier/Owner/OwnerForm';
import OwnerUpdateCashier from './components/UserCashier/Owner/OwnerUpdate';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider 
    domain='dev-ecfa59eh.us.auth0.com'
    clientId='SElkmFKF1ww3dawOmiC0wHfh8O6kpbmB'
    redirectUri={window.location.origin}
    >

    <BrowserRouter>
      { 
      //<Login />
      } 
      <NavBarCashier />
      {
        //  <NavBarAdm />
        //  <NavBarVet />
      }
      
      <div className="container my-4">
        <Routes>
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/adm/services" element={<ServiceListAdm />} />
          <Route exact path="/adm/services/form" element={<ServiceFormAdm />} />
          <Route exact path="/adm/services/update/:id_service" element={<ServiceUpdateAdm />} />
          <Route exact path="/adm/vets" element={<VetListAdm />} />
          <Route exact path="/adm/vets/form" element={<VetFormAdm />} />
          <Route exact path="/adm/vets/update/:id_number" element={<VetUpdateAdm />} />
          <Route exact path="/adm/cashiers" element={<CashierListAdm />} />
          <Route exact path="/adm/cashier/form" element={<CashierFormAdm />} />
          <Route exact path="/adm/cashiers/update/:id_number" element={<CashierUpdateAdm />} />
          <Route exact path="/vet/services" element={<ServiceListVet />} />
          <Route exact path="/vet/pets" element={<PetListVet />} />
          <Route exact path="/vet/record" element={<RecordListVet />} />
          <Route exact path="vet/record/form/:id_pet" element={<RecordFormVet />} />
          <Route exact path="/cashier/services" element={<ServiceListVet />} />
          <Route exact path="/cashier/pets" element={<PetListCashier />} />
          <Route exact path="/cashier/pets/update/:id_pet" element={<PetUpdateCashier />} />
          <Route exact path="/cashier/pets/form" element={<PetFormCashier />} />
          <Route exact path="/cashier/owners" element={<OwnerListCashier />} />
          <Route exact path="/cashier/owners/form" element={<OwnerFormCashier />} />
          <Route exact path="/cashier/owners/Update/:id_number" element={<OwnerUpdateCashier />} />
        </Routes>      
      </div>
    </BrowserRouter>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
