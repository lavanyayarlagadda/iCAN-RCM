import React from 'react';
import { Box } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import MetricCard from './MetricsCard';


// Define the type for a metric card item
type MetricColor = 'blue' | 'green' | 'orange';

interface Metric {
  title: string;
  value: string;
  subtitle: string;
  change?: string;
  totalValue: string;
  totalLabel: string;
  icon: React.ElementType;
  color: MetricColor;
}

const MetricsGrid: React.FC = () => {
  const metrics: Metric[] = [
    {
      title: 'Total Claims Submitted',
      value: '1,001',
      subtitle: 'This Month: +19.4% from last period (count)',
      change: '+8.2%',
      totalValue: '$1,877,494.00',
      totalLabel: 'Total value submitted',
      icon: DescriptionIcon,
      color: 'blue',
    },
    {
      title: 'Net Paper Paid Amount',
      value: '$120,333.00',
      subtitle: 'This Month: +6.1% from last period',
      change: '+11.9%',
      totalValue: '700',
      totalLabel: 'Paid claims count',
      icon: AttachMoneyIcon,
      color: 'green',
    },
    {
      title: 'Reconciled Claims',
      value: '914',
      subtitle: 'This Month: 78.3% of total (count)',
      change: '78% reconciled',
      totalValue: '$1,501,961.00',
      totalLabel: 'Total value reconciled',
      icon: CheckCircleIcon,
      color: 'blue',
    },
    {
      title: 'Active Discrepancies',
      value: '36',
      subtitle: 'This Month: +7 since last period (count)',
      change: '',
      totalValue: '$10,005.00',
      totalLabel: 'Total disputed value',
      icon: WarningAmberIcon,
      color: 'orange',
    },
  ];

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="flex-start" gap={2}>
      {metrics.map((metric, index) => (
        <Box
          key={index}
          sx={{
            width: {
              xs: '100%', // full width on mobile
              sm: '28%',  // 2 per row on small screens
              md: '20.5%', // ~4 per row on medium+
            },
            minWidth: 280,
            maxWidth: 400,
            flexGrow: 1,
          }}
        >
          <MetricCard {...metric} />
        </Box>
      ))}
    </Box>
  );
};
export default MetricsGrid
