import React from 'react';
import { Paper, Box, Typography, Divider } from '@mui/material';

type MetricCardColor = 'blue' | 'green' | 'orange';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  change?: string;
  totalValue: string | number;
  totalLabel: string;
  icon: React.ElementType<{ size?: number; color?: string }>;
  color: MetricCardColor;
}

const colorMap: Record<MetricCardColor, { border: string; bg: string; text: string }> = {
  blue: {
    border: '#BFDBFE', // blue-200
    bg: '#EFF6FF',     // blue-50
    text: '#2563EB',   // blue-600
  },
  green: {
    border: '#BBF7D0', // green-200
    bg: '#ECFDF5',     // green-50
    text: '#16A34A',   // green-600
  },
  orange: {
    border: '#FED7AA', // orange-200
    bg: '#FFF7ED',     // orange-50
    text: '#EA580C',   // orange-600
  },
};

 const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  subtitle,
  change,
  totalValue,
  totalLabel,
  icon: Icon,
  color,
}) => {
  const currentColor = colorMap[color] || colorMap.blue;

  return (
    <Paper
      variant="outlined"
      elevation={0}
      sx={{
        p: 2,
        borderRadius: 3,
        border: `1px solid ${currentColor.border}`,
        backgroundColor: currentColor.bg,
        boxShadow:2
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
        <Icon size={20} color={currentColor.text} />
        {change && (
          <Typography variant="caption" fontWeight="medium" color="success.main">
            {change}
          </Typography>
        )}
      </Box>

      <Box mb={2}>
        <Typography variant="subtitle2" color="text.primary">
          {title}
        </Typography>
        <Typography variant="h5" fontWeight="bold" color="text.primary">
          {value}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {subtitle}
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box>
        <Typography variant="h6" fontWeight="bold" color="text.primary">
          {totalValue}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {totalLabel}
        </Typography>
      </Box>
    </Paper>
  );
};
export default MetricCard