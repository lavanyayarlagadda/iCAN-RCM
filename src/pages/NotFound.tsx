// NotFound.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const NotFound: React.FC = () => {
  return (
    <Box p={3} textAlign="center">
      <Typography variant="h3" fontWeight="bold" color="error">
        404
      </Typography>
      <Typography variant="h6">Oops! Page not found.</Typography>
    </Box>
  );
};

export default NotFound;
