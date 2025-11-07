import {
  FontIcon,
  FontMonospaceIcon,
  FontSansSerifIcon,
  FontSerifIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
  SystemThemeIcon,
} from '@/shared/ui/icons';
import { IconButton } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';

export function SettingsMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openMore, setOpenMore] = React.useState(false);
  const [openSettings, setOpenSettings] = React.useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMore(false);
    setOpenSettings(false);
  };

  const handleMoreClick = () => {
    setOpenMore(!openMore);
  };

  const handleSettingsClick = () => {
    setOpenSettings(!openSettings);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <SettingsIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          '& .MuiPaper-root': {
            minWidth: 200,
          },
        }}
      >
        <List component='div' sx={{ py: 0 }}>
          <ListItem
            component='div'
            onClick={handleSettingsClick}
            sx={{
              cursor: 'pointer',
              '&:hover': { backgroundColor: 'action.hover' },
            }}
          >
            <SystemThemeIcon />
            <ListItemText primary='Theme' />
          </ListItem>

          <Collapse in={openSettings} timeout='auto' unmountOnExit>
            <List component='div' disablePadding sx={{ pl: 2 }}>
              <MenuItem onClick={handleClose} sx={{ pl: 2 }}>
                <SystemThemeIcon />
                System
              </MenuItem>
              <MenuItem onClick={handleClose} sx={{ pl: 2 }}>
                <MoonIcon />
                Dark
              </MenuItem>
              <MenuItem onClick={handleClose} sx={{ pl: 2 }}>
                <SunIcon />
                Light
              </MenuItem>
            </List>
          </Collapse>

          <ListItem
            component='div'
            onClick={handleMoreClick}
            sx={{
              cursor: 'pointer',
              '&:hover': { backgroundColor: 'action.hover' },
            }}
          >
            <FontIcon />
            <ListItemText primary='Font' />
          </ListItem>

          <Collapse in={openMore} timeout='auto' unmountOnExit>
            <List component='div' disablePadding sx={{ pl: 2 }}>
              <MenuItem onClick={handleClose} sx={{ pl: 2 }}>
                <FontSansSerifIcon />
                Sans-serif
              </MenuItem>
              <MenuItem onClick={handleClose} sx={{ pl: 2 }}>
                <FontSerifIcon />
                Serif
              </MenuItem>
              <MenuItem onClick={handleClose} sx={{ pl: 2 }}>
                <FontMonospaceIcon />
                Monospaced
              </MenuItem>
            </List>
          </Collapse>
        </List>
      </Menu>
    </div>
  );
}

/* import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { SettingsIcon } from '@/shared/ui/icons';
import ThemeMenu from '@/app/features/theme-switcher/ui/ThemeMenu';

export default function SettingsMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const options = [<ThemeMenu />];
  return (
    <div>
      <IconButton
        aria-label='settings'
        id='settings-button'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <SettingsIcon />
      </IconButton>
      <Menu id='settings-menu' anchorEl={anchorEl} open={open} onClose={handleClose}>
        {options.map((option, index) => (
          <MenuItem key={index} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
 */
