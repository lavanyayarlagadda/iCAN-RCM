// src/Layout.tsx
import React, { useState } from 'react';
import {
  Box,
  CssBaseline,
  Drawer,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const Layout: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const drawerWidth = sidebarOpen ? 280 : 80;

  const navigate = useNavigate();
  const location = useLocation();

const capitalizeWords = (str: string) =>
  str.replace(/(^\w|\s\w)/g, match => match.toUpperCase());

// Capitalize selected page from pathname
const selectedPage = capitalizeWords(
  location.pathname.split('/')[1]?.replace(/-/g, ' ') || 'dashboard'
);


  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleSidebarToggle = () => setSidebarOpen(!sidebarOpen);
  const handleNavigation = (label: string, path: string) => {
    navigate(path);
    if (isMobile) setMobileOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header
        onMenuClick={handleDrawerToggle}
        sidebarWidth={drawerWidth}
        selectedPage={selectedPage}
      />

      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{ '& .MuiDrawer-paper': { width: 280 } }}
        >
          <Sidebar open onToggle={handleSidebarToggle} onSelect={handleNavigation} mobile />
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          open
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              transition: 'width 0.3s',
              overflowX: 'hidden',
              boxSizing: 'border-box',
            },
          }}
        >
          <Sidebar
            open={sidebarOpen}
            onToggle={handleSidebarToggle}
            onSelect={handleNavigation}
          />
        </Drawer>
      )}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 1,
          px: 0,
          transition: 'margin 0.3s',
          bgcolor: '#f1f3f6',
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
