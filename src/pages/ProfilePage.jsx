import Layout from '../components/Layout';

export default function ProfilePage() {
  const sectionHeaderStyle = {
    backgroundColor: '#092149',
    color: 'white',
    padding: '14px 20px',
    fontSize: '16px',
    fontWeight: '600',
    marginTop: '24px'
  };

  const rowStyle = {
    display: 'flex',
    padding: '16px 20px',
    borderBottom: '1px solid #e2e8f0',
    backgroundColor: 'white'
  };

  const labelStyle = {
    width: '200px',
    fontWeight: '600',
    color: '#374151',
    fontSize: '14px'
  };

  const valueStyle = {
    flex: 1,
    color: '#1f2937',
    fontSize: '14px'
  };

  return (
    <Layout title="Customer Profile">
      <div style={{ display: 'grid', gridTemplateColumns: '350px 1fr', gap: '32px' }}>
        {/* Left - Profile Card */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
          padding: '32px',
          textAlign: 'center'
        }}>
          {/* Avatar */}
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
            margin: '0 auto 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>

          <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1e293b', margin: '0 0 24px' }}>
            DYLAN MC KENNA
          </h2>

          <div style={{ textAlign: 'left', color: '#475569', fontSize: '14px' }}>
            <p style={{ margin: '8px 0' }}>
              <strong>E-mail:</strong> dm75app@gmail.com
            </p>
            <p style={{ margin: '8px 0' }}>
              <strong>Member Since:</strong> Apr 2024
            </p>
          </div>
        </div>

        {/* Right - Form */}
        <div>
          {/* Notice */}
          <div style={{
            backgroundColor: '#dbeafe',
            border: '1px solid #93c5fd',
            borderRadius: '8px',
            padding: '16px',
            marginBottom: '24px',
            color: '#1e40af',
            fontSize: '14px',
            lineHeight: '1.5'
          }}>
            If you're experiencing difficulties with processing your credit cards, Please <a href="#" style={{ color: '#1e40af', fontWeight: '600' }}>click here</a> to update your address on file. Ensure that your address aligns with your financial institution's records, and double-check that you input your information accurately.
          </div>

          {/* Profile Info */}
          <div style={{ backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
            <div style={rowStyle}>
              <div style={labelStyle}>First & Last Name</div>
              <div style={valueStyle}>Dylan Mc Kenna</div>
            </div>
            <div style={rowStyle}>
              <div style={labelStyle}>* Your E-Mail Address</div>
              <div style={valueStyle}>
                <input
                  type="email"
                  value="dm75app@gmail.com"
                  disabled
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    backgroundColor: '#f9fafb',
                    color: '#374151',
                    fontSize: '14px'
                  }}
                />
                <p style={{ fontSize: '12px', color: '#6b7280', marginTop: '6px' }}>
                  Please contact support to change email address.
                </p>
              </div>
            </div>
            <div style={rowStyle}>
              <div style={labelStyle}>Password</div>
              <div style={valueStyle}>
                <a href="#" style={{ color: '#2563eb', textDecoration: 'underline' }}>Change</a>
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div style={sectionHeaderStyle}>Address Information</div>
          <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderTop: 'none' }}>
            <div style={rowStyle}>
              <div style={labelStyle}>Street</div>
              <div style={valueStyle}>32 rue cino del duca</div>
            </div>
            <div style={rowStyle}>
              <div style={labelStyle}>Street (Second Line)</div>
              <div style={valueStyle}></div>
            </div>
            <div style={rowStyle}>
              <div style={labelStyle}>City</div>
              <div style={valueStyle}>Neuilly sur Seine</div>
            </div>
            <div style={rowStyle}>
              <div style={labelStyle}>State</div>
              <div style={valueStyle}></div>
            </div>
            <div style={rowStyle}>
              <div style={labelStyle}>ZIP Code</div>
              <div style={valueStyle}>92200</div>
            </div>
            <div style={{ ...rowStyle, borderBottom: 'none' }}>
              <div style={labelStyle}>Country</div>
              <div style={valueStyle}>France</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
