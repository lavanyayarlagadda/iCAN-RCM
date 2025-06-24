import React from 'react';
import {
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useMediaQuery,
  useTheme,
  SelectChangeEvent,
} from '@mui/material';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

const DateRangeFilter: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Optional: Manage selected values using state (fully typed)
  const [filterType, setFilterType] = React.useState<'relative' | 'absolute'>('relative');
  const [dateRange, setDateRange] = React.useState<
    'this-month' | 'last-month' | 'this-quarter' | 'this-year'
  >('this-month');

  const handleFilterTypeChange = (event: SelectChangeEvent) => {
    setFilterType(event.target.value as 'relative' | 'absolute');
  };

  const handleDateRangeChange = (event: SelectChangeEvent) => {
    setDateRange(
      event.target.value as 'this-month' | 'last-month' | 'this-quarter' | 'this-year'
    );
  };

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        border: '1px solid #e0e0e0',
        borderRadius: 3,
        p: 3,
      }}
    >
      <Box
        display="flex"
        flexDirection={isMobile ? 'column' : 'row'}
        alignItems={isMobile ? 'flex-start' : 'center'}
        justifyContent="space-between"
        gap={3}
      >
        {/* Left: Icon + Title */}
        <Box display="flex" alignItems="center" gap={1.5}>
          <FilterListOutlinedIcon sx={{ color: '#1976d2' }} />
          <Typography variant="h6" fontWeight={600} color="text.primary">
            Date Range Filter
          </Typography>
        </Box>

        {/* Right: Filters */}
        <Box
          display="flex"
          flexDirection={isMobile ? 'column' : 'row'}
          alignItems={isMobile ? 'stretch' : 'center'}
          gap={2}
        >
          {/* Filter Type */}
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="body2" color="text.secondary">
              Filter Type:
            </Typography>
            <FormControl size="small" sx={{ minWidth: 160 }}>
              <Select
                value={filterType}
                onChange={handleFilterTypeChange}
                sx={{
                  backgroundColor: '#f5f5f5',
                  borderRadius: 2,
                }}
              >
                <MenuItem value="relative">Relative Ranges</MenuItem>
                <MenuItem value="absolute">Absolute Ranges</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Date Range */}
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="body2" color="text.secondary">
              Range:
            </Typography>
            <FormControl size="small" sx={{ minWidth: 160 }}>
              <Select
                value={dateRange}
                onChange={handleDateRangeChange}
                sx={{
                  backgroundColor: '#f5f5f5',
                  borderRadius: 2,
                }}
              >
                <MenuItem value="this-month">This Month</MenuItem>
                <MenuItem value="last-month">Last Month</MenuItem>
                <MenuItem value="this-quarter">This Quarter</MenuItem>
                <MenuItem value="this-year">This Year</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Current View Text */}
          <Box display="flex" alignItems="center" gap={1}>
            <CalendarTodayOutlinedIcon fontSize="small" sx={{ color: '#616161' }} />
            <Typography variant="body2" color="text.secondary">
              Current View: {dateRange.replace('-', ' ')}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DateRangeFilter;
