import { MobileMenu, SettingsMenu } from './components';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid red', gap: '20px' }}>
      <MobileMenu />
      <SettingsMenu />
    </div>
  );
}

export { App };
