import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  User,
  CreditCard,
  DollarSign,
  ChevronRight,
  ChevronDown,
  X
} from 'lucide-react';

export default function Sidebar({ onClose }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [expandedItems, setExpandedItems] = useState({
    accounts: location.pathname.includes('/accounts')
  });

  const toggleExpand = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const isActive = (path) => location.pathname === path;
  const isParentActive = (paths) => paths.some(p => location.pathname.startsWith(p));

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { id: 'profile', label: 'Profile', icon: User, path: '/profile' },
    {
      id: 'accounts',
      label: 'Accounts',
      icon: CreditCard,
      expandable: true,
      subItems: [
        { id: 'active-evals', label: 'Active Evals', path: '/accounts/active-evals' },
        { id: 'active-pas', label: 'Active PAs', path: '/accounts/active-pas' }
      ]
    },
    { id: 'affiliate', label: 'Affiliate Info', icon: DollarSign, path: '/affiliate' }
  ];

  return (
    <aside style={{
      width: '260px',
      backgroundColor: '#092149',
      minHeight: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Logo */}
      <div style={{
        padding: '20px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <img
          src="/sidebarlogo.png"
          alt="Apex Trader Funding"
          style={{ height: '50px', width: 'auto' }}
        />
        {onClose && (
          <button
            onClick={onClose}
            className="mobile-close-btn"
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              padding: '4px',
              display: 'none'
            }}
          >
            <X size={24} />
          </button>
        )}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .mobile-close-btn {
            display: block !important;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav style={{ flex: 1, paddingTop: '8px' }}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isExpanded = expandedItems[item.id];
          const active = item.path ? isActive(item.path) : isParentActive(item.subItems?.map(s => s.path) || []);

          return (
            <div key={item.id}>
              <button
                onClick={() => {
                  if (item.expandable) {
                    toggleExpand(item.id);
                  } else {
                    navigate(item.path);
                    if (onClose) onClose();
                  }
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 24px',
                  border: 'none',
                  background: active ? 'rgba(255,255,255,0.1)' : 'transparent',
                  color: 'white',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => {
                  if (!active) e.target.style.background = 'rgba(255,255,255,0.05)';
                }}
                onMouseLeave={(e) => {
                  if (!active) e.target.style.background = 'transparent';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <Icon size={20} style={{ opacity: 0.9 }} />
                  <span style={{ fontSize: '15px', fontWeight: '500' }}>{item.label}</span>
                </div>
                {item.expandable && (
                  isExpanded ?
                    <ChevronDown size={18} style={{ opacity: 0.7 }} /> :
                    <ChevronRight size={18} style={{ opacity: 0.7 }} />
                )}
              </button>

              {/* Sub-items */}
              {item.subItems && isExpanded && (
                <div style={{ backgroundColor: 'rgba(0,0,0,0.15)' }}>
                  {item.subItems.map((subItem) => (
                    <button
                      key={subItem.id}
                      onClick={() => { navigate(subItem.path); if (onClose) onClose(); }}
                      style={{
                        width: '100%',
                        display: 'block',
                        padding: '12px 24px 12px 58px',
                        border: 'none',
                        background: isActive(subItem.path) ? 'rgba(255,255,255,0.1)' : 'transparent',
                        color: isActive(subItem.path) ? 'white' : 'rgba(255,255,255,0.7)',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontSize: '14px',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive(subItem.path)) {
                          e.target.style.background = 'rgba(255,255,255,0.05)';
                          e.target.style.color = 'white';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive(subItem.path)) {
                          e.target.style.background = 'transparent';
                          e.target.style.color = 'rgba(255,255,255,0.7)';
                        }
                      }}
                    >
                      {subItem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
