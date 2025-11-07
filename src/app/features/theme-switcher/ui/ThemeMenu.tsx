import { useTheme } from '@/shared/lib/theme/hooks';
import { MoonIcon, SunIcon, SystemThemeIcon } from '@/shared/ui/icons';
import s from './ThemeMenu.module.scss';

export const ThemeSwitcher: React.FC = () => {
  const { currentTheme, changeTheme } = useTheme();

  const themes = [
    { value: 'light' as const, label: 'light', icon: <SunIcon /> },
    { value: 'dark' as const, label: 'dark', icon: <MoonIcon /> },
    { value: 'system' as const, label: 'system', icon: <SystemThemeIcon /> },
  ];

  return (
    <div className={s.switcher}>
      <span className={s.label}>Тема:</span>
      <div className={s.buttons}>
        {themes.map(theme => (
          <button
            key={theme.value}
            className={`${s.button} ${currentTheme === theme.value ? s.active : ''}`}
            onClick={() => changeTheme(theme.value)}
            title={theme.label}
            aria-label={theme.label}
            aria-pressed={currentTheme === theme.value}
          >
            <span className={s.icon}>{theme.icon}</span>
            <span className={s.text}>{theme.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
