import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

type ClaimStatusData = {
  name: string;
  submitted: number;
  paid: number;
  pending: number;
};

type ClaimFinancialData = {
  name: string;
  amount: number;
  color: string;
};

const ClaimStatusCharts: React.FC = () => {
  const claimStatusData: ClaimStatusData[] = [
    { name: 'Jan', submitted: 340, paid: 280, pending: 60 },
    { name: 'Feb', submitted: 320, paid: 260, pending: 60 },
    { name: 'Mar', submitted: 280, paid: 220, pending: 60 },
    { name: 'Apr', submitted: 300, paid: 240, pending: 60 },
    { name: 'May', submitted: 250, paid: 200, pending: 50 },
    { name: 'Jun', submitted: 220, paid: 180, pending: 40 },
  ];

  const claimFinancialData: ClaimFinancialData[] = [
    { name: 'Jan', amount: 800, color: '#10b981' },
    { name: 'Feb', amount: 750, color: '#10b981' },
    { name: 'Mar', amount: 600, color: '#10b981' },
    { name: 'Apr', amount: 650, color: '#10b981' },
    { name: 'May', amount: 500, color: '#f59e0b' },
    { name: 'Jun', amount: 400, color: '#ef4444' },
  ];

  return (
    <Box display="flex" flexDirection="column" gap={4}>
      {/* Claim Status by Count */}
      <Paper elevation={1} sx={{ p: 3 }}>
        <Box mb={3}>
          <Typography variant="h6" fontWeight={600}>
            Claim Status (by Count)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Distribution of claims by current status (This Month)
          </Typography>
        </Box>
        <Box sx={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={claimStatusData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
              <YAxis stroke="#6b7280" fontSize={12} />
              <Bar dataKey="submitted" fill="#3b82f6" radius={[2, 2, 0, 0]} />
              <Bar dataKey="paid" fill="#10b981" radius={[2, 2, 0, 0]} />
              <Bar dataKey="pending" fill="#f59e0b" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Paper>

      {/* Claim Financials by Status */}
      <Paper elevation={1} sx={{ p: 3 }}>
        <Box mb={3}>
          <Typography variant="h6" fontWeight={600}>
            Claim Financials (by Status)
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Total claim amounts by current status (This Month)
          </Typography>
        </Box>
        <Box sx={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={claimFinancialData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
              <YAxis stroke="#6b7280" fontSize={12} />
              <Bar dataKey="amount" radius={[2, 2, 0, 0]}>
                {claimFinancialData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Paper>
    </Box>
  );
};

export default ClaimStatusCharts;
