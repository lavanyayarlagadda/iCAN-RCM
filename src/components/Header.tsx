import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Avatar,
  Tooltip,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

// Define the type for props
interface HeaderProps {
  onMenuClick: () => void;
  sidebarWidth: number;
  selectedPage: string;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, sidebarWidth, selectedPage }) => {
  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: '#f5f5f5',
          color: '#000',
          width: `calc(100% - ${sidebarWidth}px)`,
          ml: `${sidebarWidth}px`,
          height: 57,
          justifyContent: 'center',
          transition: 'all 0.3s',
        }}
      >
        <Toolbar
          sx={{
            minHeight: '56px !important',
            px: 2,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {/* Left Section */}
          <Box display="flex" alignItems="center">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: { md: 'none' } }}
              onClick={onMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="subtitle1" fontWeight="bold">
              {selectedPage}
            </Typography>
          </Box>

          {/* Right Section */}
          <Box display="flex" alignItems="center" gap={1}>
            <Tooltip title="Settings">
              <IconButton size="small" color="inherit">
                <SettingsIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Logout">
              <IconButton size="small" color="inherit">
                <LogoutIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="My Profile">
              <Avatar
                sx={{
                  width: 30,
                  height: 30,
                  bgcolor: 'primary.main',
                  fontSize: 14,
                }}
              >
                LY
              </Avatar>
            </Tooltip>
          </Box>
        </Toolbar>
        <Divider />
      </AppBar>
    </>
  );
};

export default Header;
