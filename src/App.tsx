import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PurchasePage from './pages/PurchasePage';
import ThankYouPage from './pages/ThankYouPage';
import SalesReportPage from './pages/SalesReportPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/purchase/:productId" element={<PurchasePage />} />
                <Route path="/thank-you" element={<ThankYouPage />} />
                <Route path="/sales-report" element={<SalesReportPage />} />
            </Routes>
        </Router>
    );
}

export default App;
