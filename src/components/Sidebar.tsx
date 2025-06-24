import React, { useState } from 'react';
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
  Typography,
  Divider,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  ExpandLess,
  ExpandMore,
  MenuOpen as MenuOpenIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { menuItems } from '../data/menuItems';
import Logo from '../assets/images/Logo.png'

interface SidebarProps {
  open: boolean;
  onToggle: () => void;
  onSelect: (title: string, path: string) => void;
  mobile?: boolean;
}

const Sidebar = ({ open, onToggle, onSelect, mobile = false }: SidebarProps) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const handleToggle = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <Box sx={{ height: '100vh', overflowY: 'auto', bgcolor: '#f5f5f5' }}>
      {/* Header */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent={open ? 'space-between' : 'center'}
        px={2}
        py={1}
      >
        {open && (
          <>
            <img src={Logo} alt="Logo" style={{ height: 40 }} />
            <Typography variant="subtitle1" fontWeight="bold" color="primary">
              iCAN RCM
            </Typography>
          </>
        )}
        {!mobile && (
          <IconButton onClick={onToggle}>
            {open ? (
              <MenuOpenIcon />
            ) : (
              <>
                <img
                  src={Logo}
                  alt="Logo"
                  style={{ height: 20, marginRight: '8px' }}
                />
                <MenuIcon />
              </>
            )}
          </IconButton>
        )}
      </Box>

      <Divider />

      {/* Menu Items */}
      <List>
        {menuItems.map(({ title, icon, children }) => {
          const isOpen = openSections[title];

          return (
            <Box key={title}>
              <Tooltip title={!open ? title : ''} placement="right">
                <ListItemButton
                  onClick={() => handleToggle(title)}
                  sx={{
                    justifyContent: open ? 'flex-start' : 'center',
                    px: 1,
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 0, mr: open ? 1 : 0 }}>
                    {icon}
                  </ListItemIcon>

                  {open ? (
                    <>
                      <ListItemText
                        primary={title}
                        primaryTypographyProps={{
                          color: 'black',
                          fontWeight: 'bold',
                        }}
                      />
                      {isOpen ? <ExpandLess /> : <ExpandMore />}
                    </>
                  ) : isOpen ? (
                    <ExpandLess fontSize="small" sx={{ ml: 0.5 }} />
                  ) : (
                    <ExpandMore fontSize="small" sx={{ ml: 0.5 }} />
                  )}
                </ListItemButton>
              </Tooltip>

              {/* Children Items */}
              <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {children.map(({ title: childTitle, path, icon: childIcon }) => (
                    <Tooltip key={childTitle} title={!open ? childTitle : ''} placement="right">
                      <ListItemButton
                        onClick={() => onSelect(childTitle, path)}
                        sx={{
                          pl: open ? 2 : 0,
                          justifyContent: open ? 'flex-start' : 'center',
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 1 : 0,
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          {childIcon}
                        </ListItemIcon>

                        {open && (
                          <ListItemText
                            primary={childTitle}
                            primaryTypographyProps={{ color: 'black' }}
                          />
                        )}
                      </ListItemButton>
                    </Tooltip>
                  ))}
                </List>
              </Collapse>
            </Box>
          );
        })}
      </List>
    </Box>
  );
};

export default Sidebar;
