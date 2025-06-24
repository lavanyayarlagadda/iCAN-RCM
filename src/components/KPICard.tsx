// src/components/KPICard.tsx
import React, { ReactElement } from 'react';
import { Box, Typography, Paper, Tooltip } from '@mui/material';

export type TrendType = 'up' | 'down' | 'neutral';

export interface KPICardProps {
  title: string;
  value: string;
  change: string;
  trend: TrendType;
  icon: ReactElement;
  color:  string;
  description: string;
}

const KPICard: React.FC<KPICardProps> = ({
  title,
  value,
  change,
  trend,
  icon,
  color,
  description,
}) => {
  const getTrendColor = (): string => {
    switch (trend) {
      case 'up':
        return '#4CAF50';
      case 'down':
        return '#FF5722';
      default:
        return '#9E9E9E';
    }
  };

  const barWidth =
    trend === 'up' ? '75%' : trend === 'down' ? '45%' : '60%';

  return (
    <Paper
      elevation={4}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 4,
        p: 3,
        bgcolor: '#fff',
        transition: '0.3s',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: 6,
        },
      }}
    >
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Box
          sx={{
            p: 1.5,
            borderRadius: 3,
            background: color,
          }}
        >
          {React.cloneElement(icon)}
        </Box>
        <Typography variant="body2" sx={{ color: getTrendColor() }}>
          {change}
        </Typography>
      </Box>

      <Box mb={1}>
        <Tooltip title={title}>
          <Typography variant="subtitle1" fontWeight={600} noWrap>
            {title}
          </Typography>
        </Tooltip>
        <Typography variant="h5" fontWeight="bold">
          {value}
        </Typography>
        <Tooltip title={description}>
          <Typography
            variant="body2"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {description}
          </Typography>
        </Tooltip>
      </Box>

      <Box mt="auto">
        <Box height={8} bgcolor="#eee" borderRadius={10}>
          <Box
            sx={{
              height: '100%',
              width: barWidth,
              background: color,
              borderRadius: 10,
            }}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default KPICard;
