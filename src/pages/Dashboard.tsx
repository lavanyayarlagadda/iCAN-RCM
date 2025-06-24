import React from 'react';
import { Container, Box } from '@mui/material';
import DateRangeFilter from '../components/DateRangeFilter';
import MetricsGrid from '../components/MetricsGrid';
import ClaimStatusCharts from '../components/ClaimStatusCharts';
import RecentActivity from '../components/RecentActivity';

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh' }}>
       <Container maxWidth={false} disableGutters sx={{ pb: 1, px: 2, pt: 0 }}>
        <Box mb={2}>
          <DateRangeFilter />
        </Box>
        <Box mb={2}>
          <MetricsGrid />
        </Box>
        <ClaimStatusCharts />
        <RecentActivity />
      </Container>
    </Box>
  );
};

export default Dashboard;
