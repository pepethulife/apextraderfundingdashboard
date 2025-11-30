import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout({ title, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f1f5f9', width: '100%', maxWidth: '100vw', overflowX: 'hidden' }}>

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
        <div className="scroll-wrapper">
          <Header title={title} onMenuClick={() => setSidebarOpen(true)} />
          <main style={{ flex: 1, padding: '24px', width: '100%', maxWidth: '100%', overflowX: 'hidden' }}>
            {children}
          </main>
        </div>
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
          width: calc(100% - 260px);
          max-width: calc(100% - 260px);
          overflow-x: hidden;
        }

        .scroll-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          width: 100%;
          max-width: 100%;
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
            overflow-x: hidden;
            overscroll-behavior-x: none;
            -webkit-overflow-scrolling: touch;
            width: 100%;
            max-width: 100vw;
          }

          .scroll-wrapper {
            width: 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
