import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import { accountData } from '../data/mockData';

export default function AccountsPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { id: 'active-evals', label: 'Active Evals', path: '/accounts/active-evals' },
    { id: 'active-pas', label: 'Active PAs', path: '/accounts/active-pas' }
  ];

  const currentTab = tabs.find(t => location.pathname === t.path) || tabs[1];
  const pageTitle = currentTab.id === 'active-pas' ? 'Active PA Accounts' : 'Active Eval Accounts';

  const tabStyle = (isActive) => ({
    padding: '12px 24px',
    border: '1px solid #cbd5e1',
    borderBottom: isActive ? '2px solid #1e293b' : '1px solid #cbd5e1',
    backgroundColor: 'white',
    cursor: 'pointer',
    fontSize: '15px',
    color: isActive ? '#1e293b' : '#64748b',
    fontWeight: isActive ? '600' : '400',
    textDecoration: 'underline',
    borderRadius: '6px 6px 0 0',
    marginRight: '8px'
  });

  const thStyle = {
    backgroundColor: '#092149',
    color: 'white',
    padding: '14px 16px',
    textAlign: 'left',
    fontSize: '13px',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  const tdStyle = {
    padding: '14px 16px',
    borderBottom: '1px solid #e2e8f0',
    fontSize: '14px',
    color: '#374151'
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <>
      <Layout title={pageTitle}>
        {/* Tabs */}
        <div style={{ display: 'flex', marginBottom: '24px' }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => navigate(tab.path)}
              style={tabStyle(location.pathname === tab.path)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e2e8f0', width: '100%', maxWidth: '100%' }}>
          <div style={{ padding: '20px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#1e293b' }}>
              {pageTitle} <span style={{ fontWeight: '400', color: '#64748b' }}>
                {currentTab.id === 'active-pas' ? `${accountData.length} records` : 'no records'}
              </span>
            </h2>
            {currentTab.id === 'active-pas' && (
              <button
                onClick={() => navigate('/charts')}
                style={{
                  backgroundColor: '#092149',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500'
                }}
              >
                View PA Charts
              </button>
            )}
          </div>

          {/* Table */}
          <div style={{ overflowX: 'auto', width: '100%', maxWidth: '100%' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={thStyle}>ACCOUNT</th>
                  <th style={thStyle}>STATUS</th>
                  <th style={thStyle}>PRODUCT</th>
                  <th style={thStyle}>BALANCE</th>
                  <th style={thStyle}>PNL</th>
                </tr>
              </thead>
              <tbody>
                {currentTab.id === 'active-pas' ? (
                  accountData.map((row, index) => (
                    <tr key={row.id} style={{ backgroundColor: index % 2 === 0 ? 'white' : '#f8fafc' }}>
                      <td style={tdStyle}>PA-APEX-{158432 + row.id}-01</td>
                      <td style={tdStyle}>{row.status}</td>
                      <td style={tdStyle}>50K Full</td>
                      <td style={tdStyle}>{formatCurrency(row.balance)}</td>
                      <td style={tdStyle}>{formatCurrency(row.pnl)}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} style={{ ...tdStyle, textAlign: 'center', padding: '40px', color: '#64748b' }}>
                      No records found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </>
  );
}
