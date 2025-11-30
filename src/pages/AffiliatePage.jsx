import Layout from '../components/Layout';
import { Copy, DollarSign, Users, TrendingUp } from 'lucide-react';

export default function AffiliatePage() {
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

  const statCardStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    padding: '24px',
    textAlign: 'center'
  };

  return (
    <Layout title="Affiliate Info">
      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '32px' }}>
        <div style={statCardStyle}>
          <DollarSign size={32} style={{ color: '#059669', marginBottom: '12px' }} />
          <div style={{ fontSize: '28px', fontWeight: '700', color: '#1e293b' }}>$0</div>
          <div style={{ fontSize: '14px', color: '#64748b', marginTop: '4px' }}>Total Earnings</div>
        </div>
        <div style={statCardStyle}>
          <Users size={32} style={{ color: '#3b82f6', marginBottom: '12px' }} />
          <div style={{ fontSize: '28px', fontWeight: '700', color: '#1e293b' }}>0</div>
          <div style={{ fontSize: '14px', color: '#64748b', marginTop: '4px' }}>Total Referrals</div>
        </div>
        <div style={statCardStyle}>
          <TrendingUp size={32} style={{ color: '#8b5cf6', marginBottom: '12px' }} />
          <div style={{ fontSize: '28px', fontWeight: '700', color: '#1e293b' }}>0</div>
          <div style={{ fontSize: '14px', color: '#64748b', marginTop: '4px' }}>Active This Month</div>
        </div>
        <div style={statCardStyle}>
          <DollarSign size={32} style={{ color: '#f59e0b', marginBottom: '12px' }} />
          <div style={{ fontSize: '28px', fontWeight: '700', color: '#1e293b' }}>$0</div>
          <div style={{ fontSize: '14px', color: '#64748b', marginTop: '4px' }}>Pending Payout</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        {/* Affiliate Link */}
        <div>
          <div style={cardHeaderStyle}>Your Affiliate Link</div>
          <div style={cardBodyStyle}>
            <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '16px' }}>
              Share this link with others to earn commissions on their purchases.
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: '#f1f5f9',
              padding: '12px 16px',
              borderRadius: '6px'
            }}>
              <input
                type="text"
                value="https://apextraderfunding.com/ref/dylanmckenna"
                readOnly
                style={{
                  flex: 1,
                  border: 'none',
                  backgroundColor: 'transparent',
                  fontSize: '14px',
                  color: '#374151'
                }}
              />
              <button style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: '#092149',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '13px'
              }}>
                <Copy size={14} /> Copy
              </button>
            </div>
          </div>
        </div>

        {/* Commission Structure */}
        <div>
          <div style={cardHeaderStyle}>Commission Structure</div>
          <div style={cardBodyStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #e2e8f0' }}>
              <span style={{ color: '#64748b' }}>Evaluation Purchase</span>
              <span style={{ fontWeight: '600', color: '#059669' }}>15% Commission</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #e2e8f0' }}>
              <span style={{ color: '#64748b' }}>Reset Fee</span>
              <span style={{ fontWeight: '600', color: '#059669' }}>10% Commission</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0' }}>
              <span style={{ color: '#64748b' }}>Monthly Subscription</span>
              <span style={{ fontWeight: '600', color: '#059669' }}>5% Recurring</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Referrals */}
      <div style={{ marginTop: '24px' }}>
        <div style={cardHeaderStyle}>Recent Referrals</div>
        <div style={{ ...cardBodyStyle, padding: 0 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f8fafc' }}>
                <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#64748b' }}>DATE</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#64748b' }}>USER</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#64748b' }}>PRODUCT</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#64748b' }}>COMMISSION</th>
                <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: '13px', fontWeight: '600', color: '#64748b' }}>STATUS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} style={{ padding: '40px 20px', textAlign: 'center', color: '#64748b', fontSize: '14px' }}>
                  No referrals yet. Share your affiliate link to start earning!
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
