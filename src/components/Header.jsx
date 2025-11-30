import { useState } from 'react';
import { ChevronDown, HelpCircle, User, LogOut, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header({ title }) {
  const [helpOpen, setHelpOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header style={{
      backgroundColor: '#092149',
      padding: '16px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      {/* Page Title */}
      <h1 style={{
        color: 'white',
        fontSize: '22px',
        fontWeight: '600',
        margin: 0
      }}>
        {title}
      </h1>

      {/* Right Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        {/* 2FA Status */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <CheckCircle size={16} style={{ color: '#22c55e' }} />
          <span style={{ color: 'white', fontSize: '13px' }}>Two-Factor Authentication (Enabled)</span>
        </div>

        {/* Get Help */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => { setHelpOpen(!helpOpen); setUserOpen(false); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            Get Help
            <ChevronDown size={16} />
          </button>
          {helpOpen && (
            <div style={{
              position: 'absolute',
              right: 0,
              top: '100%',
              marginTop: '8px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              minWidth: '180px',
              zIndex: 100
            }}>
              <a href="#" style={{ display: 'block', padding: '12px 16px', color: '#374151', textDecoration: 'none', fontSize: '14px' }}>Help Center</a>
              <a href="#" style={{ display: 'block', padding: '12px 16px', color: '#374151', textDecoration: 'none', fontSize: '14px' }}>Contact Support</a>
              <a href="#" style={{ display: 'block', padding: '12px 16px', color: '#374151', textDecoration: 'none', fontSize: '14px' }}>Trading Rules</a>
            </div>
          )}
        </div>

        {/* User Menu */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => { setUserOpen(!userOpen); setHelpOpen(false); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
          >
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: '#3b82f6',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <User size={18} />
            </div>
            Dylan Mc Kenna
            <ChevronDown size={16} />
          </button>
          {userOpen && (
            <div style={{
              position: 'absolute',
              right: 0,
              top: '100%',
              marginTop: '8px',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              minWidth: '200px',
              zIndex: 100
            }}>
              <div style={{ padding: '16px', borderBottom: '1px solid #e5e7eb' }}>
                <p style={{ fontWeight: '600', color: '#1f2937', margin: 0 }}>Dylan Mc Kenna</p>
                <p style={{ fontSize: '13px', color: '#6b7280', margin: '4px 0 0 0' }}>dm75app@gmail.com</p>
              </div>
              <button
                onClick={() => navigate('/profile')}
                style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', padding: '12px 16px', background: 'none', border: 'none', color: '#374151', cursor: 'pointer', fontSize: '14px', textAlign: 'left' }}
              >
                <User size={16} /> My Profile
              </button>
              <button
                onClick={() => navigate('/')}
                style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', padding: '12px 16px', background: 'none', border: 'none', color: '#dc2626', cursor: 'pointer', fontSize: '14px', textAlign: 'left' }}
              >
                <LogOut size={16} /> Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
