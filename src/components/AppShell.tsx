import React, { useState, useEffect } from 'react';
import { Navigation } from './Navigation';
import { Home } from '../pages/Home';
import { JourneyPage } from '../pages/Journey';
import { QuestsPage } from '../pages/Quests';
import { ProgressPage } from '../pages/Progress';
import { ProfilePage } from '../pages/Profile';
import { useAppState } from '../hooks/useAppState';
import { useTheme } from '../hooks/useTheme';
import '../styles/index.css';

export const AppShell: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const appState = useAppState();
  const { theme, setTheme } = useTheme(appState.state.profile.theme);

  useEffect(() => {
    appState.updateProfile({ theme });
  }, [theme]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home appState={appState} />;
      case 'journey':
        return <JourneyPage appState={appState} />;
      case 'quests':
        return <QuestsPage appState={appState} />;
      case 'progress':
        return <ProgressPage appState={appState} />;
      case 'profile':
        return <ProfilePage appState={appState} setTheme={setTheme} theme={theme} />;
      default:
        return <Home appState={appState} />;
    }
  };

  return (
    <div className="app-shell" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <main className="app-content">
        {renderPage()}
      </main>
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
    </div>
  );
};
