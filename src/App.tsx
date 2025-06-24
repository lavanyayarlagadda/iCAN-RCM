import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './Layout';

import Tasks from './pages/Tasks';
import Workflows from './pages/Workflows';
import Payments from './pages/Payments';
import Adjustments from './pages/Adjustments';
import PredictiveKPI from './pages/PredictiveKPI';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './Routes/ProtectedRoute';

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          {/* ✅ Default route redirects to /dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/workflows" element={<Workflows />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/adjustments" element={<Adjustments />} />
          <Route path="/predictive-kpi" element={<PredictiveKPI />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
