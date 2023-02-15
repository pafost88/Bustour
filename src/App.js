import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Main Pages
import MainPage from './routes/MainPage';
import BusPage from './routes/BusPage';
import CheckOutPage from './routes/CheckOutPage';

// Information Pages
import AboutPage from './routes/Information/AboutPage';
import BlogPage from './routes/Information/BlogPage';
import ContactsPage from './routes/Information/ContactsPage';
import FAQPage from './routes/Information/FAQPage';
import SupportPage from './routes/Information/SupportPage';

// Documents Pages
import AgreementPage from './routes/Documents/AgreementPage';
import PersonalDataPage from './routes/Documents/PersonalDataPage';

// header, footer
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import './assets/styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<MainPage/>}/>
        <Route exact path="/bus-list" element={<BusPage/>}/>
        <Route exact path="/check-out" element={<CheckOutPage/>}/>

        <Route exact path="/abot" element={<AboutPage/>}/>
        <Route exact path="/blog" element={<BlogPage/>}/>
        <Route exact path="/contacts" element={<ContactsPage/>}/>
        <Route exact path="/faq" element={<FAQPage/>}/>
        <Route exact path="/support" element={<SupportPage/>}/>

        <Route exact path="/agreement" element={<AgreementPage/>}/>
        <Route exact path="/personal-data" element={<PersonalDataPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
