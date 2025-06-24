import React from 'react';
import { Box, Typography, Grid } from '@mui/material';


// MUI icons
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import KPICard, { KPICardProps } from './KPICard';


const KPIGrid = () => {
const kpiData: KPICardProps[] = [
  {
    title: 'Clean Claim Rate',
    value: '82.0%',
    change: '+1.2% increase',
    trend: 'up',
    icon: <CheckCircleOutlineIcon />,
    color: '#66bb6a', // Medium green
    description: 'This Month: First-pass claim resolution rate',
  },
  {
    title: 'Overall Denial Rate',
    value: '7.0%',
    change: '-0.5% decrease',
    trend: 'down',
    icon: <WarningAmberIcon />,
    color: '#ffa726', // Medium orange
    description: 'This Month: Claim value based',
  },
  {
    title: 'Days in A/R',
    value: '34 days',
    change: '-0.1% change',
    trend: 'neutral',
    icon: <CalendarTodayIcon />,
    color: '#42a5f5', // Medium blue
    description: 'This Month: Average collection period',
  },
  {
    title: 'Net Collection Rate (NCR)',
    value: '84.0%',
    change: '+0.3% increase',
    trend: 'up',
    icon: <TrackChangesIcon />,
    color: '#26c6da', // Medium teal
    description: 'This Month: Adjusted for contractuals',
  },
  {
    title: 'AI Automation Rate (Posting)',
    value: '75.0%',
    change: '+5.0% increase',
    trend: 'up',
    icon: <TrendingUpIcon />,
    color: '#ab47bc', // Medium purple
    description: 'This Month: Payments posted by AI',
  },
  {
    title: 'Contractual Variance Detected',
    value: '$11,088.00',
    change: '-100% decrease',
    trend: 'down',
    icon: <AttachMoneyIcon />,
    color: '#ef5350', // Medium red
    description: 'This Month: Total under/overpayments found',
  },
  {
    title: 'Total Cash Receipts (Verified)',
    value: '$1,100,000.00',
    change: '+8.0% increase',
    trend: 'up',
    icon: <AttachMoneyIcon />,
    color: '#66bb6a', // Medium green
    description: 'This Month: Bank verified',
  },
  {
    title: 'Appeal Success Rate',
    value: '58.0%',
    change: '+3.0% increase',
    trend: 'up',
    icon: <TrendingUpIcon />,
    color: '#5c6bc0', // Medium indigo
    description: 'This Month: For AI-assisted appeals',
  },
];


  return (
<Box
      display="flex"
      flexWrap="wrap"
      justifyContent="flex-start"
      gap={2}
    >
      {kpiData.map((kpi, index) => (
        <Box
          key={index}
          sx={{
            width: {
              xs: '100%',    // full width on mobile
              sm: '28%',     // 2 per row on small screens
              md: '20.5%'    // ~4 per row on medium+ (with gap)
            },
            minWidth: 280,
            maxWidth: 400,
            flexGrow: 1
          }}
        >
          <KPICard {...kpi} />
        </Box>
      ))}
    </Box>

  );
};

export default KPIGrid;
