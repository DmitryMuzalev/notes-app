import { type ReactNode } from 'react';
import { ArchiveIcon, HomeIcon, SearchIcon, SettingsIcon, TagIcon } from '@/shared/ui/icons';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import s from './MobileMenu.module.scss';

type MenuItemData = {
  title: string;
  url: string;
  icon: ReactNode;
};
const navItems: MenuItemData[] = [
  {
    title: 'home',
    url: '/',
    icon: <HomeIcon />,
  },
  {
    title: 'search',
    url: '/search',
    icon: <SearchIcon />,
  },
  {
    title: 'archived',
    url: '/archived',
    icon: <ArchiveIcon />,
  },
  {
    title: 'tags',
    url: '/tags',
    icon: <TagIcon />,
  },
  {
    title: 'setting',
    url: '/setting',
    icon: <SettingsIcon />,
  },
];

function MobileMenu() {
  return (
    <nav className={s.menu}>
      <BottomNavigation showLabels>
        {navItems.map(({ title, url, icon }, index) => (
          <BottomNavigationAction
            key={index}
            label={title}
            icon={icon}
            href={url}
            className={s.action}
          />
        ))}
      </BottomNavigation>
    </nav>
  );
}

export { MobileMenu };

/* 
function MobileMenu() {
  return (
    <nav className={s.menu}>
      <ul className={s.list}>
        {navItems.map(({ title, url, icon }, index) => (
          <li key={index} className={s.item}>
            <a href={url} className={s.link}>
              {icon}
              <span className={s.text}>{title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

*/
