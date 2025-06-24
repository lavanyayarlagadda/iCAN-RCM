import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SearchIcon from '@mui/icons-material/Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

interface Activity {
  id: number;
  type: string;
  title: string;
  time: string;
  icon: React.ReactNode;
}

const RecentActivity = () => {
  const activities: Activity[] = [
    {
      id: 1,
      type: 'verification',
      title: 'Eligibility verified for a new patient by automated process with Cigna',
      time: 'less than a minute ago',
      icon: <CheckCircleIcon sx={{ color: '#16a34a', fontSize: 20, mt: 0.5 }} />,
    },
    {
      id: 2,
      type: 'claim',
      title: 'New claim 295256587 for Eligibility Inquiry submitted for the system to Aetna',
      time: 'less than a minute ago',
      icon: <SearchIcon sx={{ color: '#2563eb', fontSize: 20, mt: 0.5 }} />,
    },
  ];

  return (
    <Paper elevation={1} sx={{ p: 3, mt: 2 }}>
      {/* Header */}
      <Box mb={3}>
        <Typography variant="h6" fontWeight={600}>
          Recent Activity
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Latest updates on claims and payments
        </Typography>
      </Box>

      {/* Activity List */}
      <Box display="flex" flexDirection="column" gap={2}>
        {activities.map((activity) => (
          <Box
            key={activity.id}
            display="flex"
            gap={2}
            p={2}
            borderRadius={2}
            bgcolor="#f9fafb"
          >
            {activity.icon}
            <Box flex={1}>
              <Typography variant="body2" color="text.primary" sx={{ lineHeight: 1.6 }}>
                {activity.title}
              </Typography>
              <Box display="flex" alignItems="center" gap={1} mt={0.5}>
                <AccessTimeIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
                <Typography variant="caption" color="text.secondary">
                  {activity.time}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};

export default RecentActivity;
