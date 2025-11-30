import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Menu, X } from 'lucide-react';

export default function Layout({ title, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f1f5f9' }}>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="mobile-menu-btn"
        style={{
          position: 'fixed',
          top: '16px',
          left: '16px',
          zIndex: 50,
          padding: '8px',
          backgroundColor: '#092149',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          display: 'none'
        }}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 998
          }}
          className="mobile-overlay"
        />
      )}

      {/* Sidebar */}
      <div className={`sidebar-container ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </div>

      {/* Main Content */}
      <div className="main-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Header title={title} />
        <main style={{ flex: 1, padding: '24px' }}>
          {children}
        </main>
      </div>

      <style>{`
        .sidebar-container {
          position: fixed;
          left: 0;
          top: 0;
          z-index: 999;
        }

        .main-content {
          margin-left: 260px;
        }

        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block !important;
          }

          .sidebar-container {
            transform: translateX(-100%);
            transition: transform 0.3s ease;
          }

          .sidebar-container.sidebar-open {
            transform: translateX(0);
          }

          .main-content {
            margin-left: 0;
          }
        }
      `}</style>
    </div>
  );
}
