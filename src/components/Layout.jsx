import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout({ title, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f1f5f9' }}>

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
        <Header title={title} onMenuClick={() => setSidebarOpen(true)} />
        <main style={{ flex: 1, padding: '24px' }}>
          {children}
        </main>
      </div>

      <style>{`
        .sidebar-container {
          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;
          z-index: 999;
          height: 100vh;
        }

        .main-content {
          margin-left: 260px;
          min-height: 100vh;
        }

        @media (max-width: 768px) {
          .sidebar-container {
            transform: translateX(-100%);
            transition: transform 0.3s ease;
          }

          .sidebar-container.sidebar-open {
            transform: translateX(0);
          }

          .main-content {
            margin-left: 0;
            overflow-x: auto;
            overscroll-behavior-x: contain;
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </div>
  );
}
