import React from 'react';
import { Home, Map, Sword, TrendingUp, User } from 'lucide-react';
import '../styles/components/Navigation.css';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'journey', label: 'Journey', icon: Map },
    { id: 'quests', label: 'Quests', icon: Sword },
    { id: 'progress', label: 'Progress', icon: TrendingUp },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="navigation">
      {navItems.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          className={`nav-item ${currentPage === id ? 'active' : ''}`}
          onClick={() => onNavigate(id)}
          aria-label={label}
          title={label}
        >
          <Icon size={24} />
          <span className="nav-label">{label}</span>
        </button>
      ))}
    </nav>
  );
};
