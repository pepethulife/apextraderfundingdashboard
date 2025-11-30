import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

export default function DashboardPage() {
  const navigate = useNavigate();

  const cardHeaderStyle = {
    backgroundColor: '#092149',
    color: 'white',
    padding: '14px 20px',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '8px 8px 0 0'
  };

  const cardBodyStyle = {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '0 0 8px 8px',
    border: '1px solid #e2e8f0',
    borderTop: 'none'
  };

  const statItemStyle = {
    textAlign: 'center',
    marginBottom: '24px'
  };

  const statLabelStyle = {
    fontSize: '16px',
    color: '#1e293b',
    textDecoration: 'underline',
    marginBottom: '12px',
    cursor: 'pointer'
  };

  const statValueStyle = {
    border: '1px solid #cbd5e1',
    borderRadius: '6px',
    padding: '10px 24px',
    display: 'inline-block',
    minWidth: '120px',
    color: '#475569',
    fontSize: '15px'
  };

  const linkStyle = {
    display: 'block',
    color: '#1e293b',
    textDecoration: 'underline',
    fontSize: '15px',
    marginBottom: '12px',
    cursor: 'pointer'
  };

  return (
    <Layout title="Dashboard">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        {/* Accounts Card */}
        <div>
          <div style={cardHeaderStyle}>Accounts</div>
          <div style={cardBodyStyle}>
            <div style={statItemStyle}>
              <div style={statLabelStyle} onClick={() => navigate('/accounts/active-evals')}>Active Evals</div>
              <div style={statValueStyle}>0</div>
            </div>
            <div style={statItemStyle}>
              <div style={statLabelStyle} onClick={() => navigate('/accounts/active-pas')}>Active PAs</div>
              <div style={statValueStyle}>20 of 20</div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Purchases Card */}
          <div>
            <div style={cardHeaderStyle}>Purchases</div>
            <div style={cardBodyStyle}>
              <a href="#" style={linkStyle}>Active Subscriptions( 0 Active )</a>
              <a href="#" style={linkStyle}>Purchase Receipts</a>
              <a href="#" style={linkStyle}>Payment History</a>
              <a href="#" style={linkStyle}>Legacy Payment History</a>
            </div>
          </div>

          {/* Useful Links Card */}
          <div>
            <div style={cardHeaderStyle}>Useful Links</div>
            <div style={cardBodyStyle}>
              <a href="#" style={linkStyle}>User Agreement</a>
              <a href="#" style={linkStyle}>Trading Tools and Resources</a>
              <a href="#" style={linkStyle}>Trading Rules</a>
              <a href="#" style={linkStyle}>Required Training</a>
            </div>
          </div>
        </div>
      </div>

      {/* E-Mail Preferences Card */}
      <div style={{ marginTop: '24px', maxWidth: '600px' }}>
        <div style={cardHeaderStyle}>E-Mail Preferences</div>
        <div style={cardBodyStyle}>
          <button style={{
            backgroundColor: '#092149',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            Unsubscribe from all e-mail messages
          </button>
        </div>
      </div>
    </Layout>
  );
}
