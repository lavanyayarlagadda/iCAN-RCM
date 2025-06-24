import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import DateRangeFilter from '../components/DateRangeFilter';
import KPIGrid from '../components/KPIGrid';
import DenialRateChart from '../components/DenialRateCharts';
import { TrendingUp } from '@mui/icons-material';

const PredictiveKPI: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', overflow: 'hidden' }}>
      <Box sx={{ position: 'relative', zIndex: 10 }}>
        <Container maxWidth={false} disableGutters sx={{ pb: 1, px: 2, pt: 0 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {/* Header */}
            <Box
              sx={{
                backgroundColor: '#fff',
                border: '1px solid #e0e0e0',
                borderRadius: 3,
                p: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              <Box
                sx={{
                  background: '#2196f3',
                  p: 1.5,
                  borderRadius: 2,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <TrendingUp sx={{ color: '#fff' }} />
              </Box>

              <Box>
                <Typography variant="h6" fontWeight="bold" color="text.primary">
                  Predictive KPI
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Key performance indicators for iCAN Proactive RCM
                </Typography>
              </Box>
            </Box>

            {/* Filters and KPI Cards */}
            <DateRangeFilter />
            <KPIGrid />
            <DenialRateChart />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default PredictiveKPI;
