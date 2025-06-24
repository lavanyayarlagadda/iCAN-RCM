import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Define the shape of your chart data
type DenialData = {
  name: string;
  value: number;
};

// Sample data array
const data: DenialData[] = [
  { name: 'Coding Error', value: 140 },
  { name: 'No Auth', value: 100 },
  { name: 'Eligibility', value: 85 },
  { name: 'Non-Covered', value: 65 },
  { name: 'Duplicate', value: 45 },
];

const DenialRateChart: React.FC = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        mt: 0,
        p: 3,
        borderRadius: 4,
        bgcolor: '#fff',
      }}
    >
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Denial Rate Trends (by Root Cause)
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>
        AI-identified root cause categories for denials (This Month).
      </Typography>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart layout="vertical" data={data} margin={{ left: 20 }}>
          <XAxis type="number" hide />
          <YAxis
            type="category"
            dataKey="name"
            width={150}
            tick={{ fontSize: 13 }}
          />
          <Tooltip />
          <Bar dataKey="value" fill="#FF7043" radius={[4, 4, 4, 4]} />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default DenialRateChart;
