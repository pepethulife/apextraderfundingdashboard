import Layout from '../components/Layout';

export default function UserAgreementPage() {
  return (
    <Layout title="User Agreement">
      <div style={{ maxWidth: '900px' }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
          padding: '32px'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1e293b', marginTop: 0, marginBottom: '24px' }}>
            User Agreement
          </h2>

          <div style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7' }}>
            <p style={{ marginBottom: '16px' }}>
              <strong>Last Updated:</strong> January 1, 2024
            </p>

            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', marginTop: '24px', marginBottom: '12px' }}>
              1. Acceptance of Terms
            </h3>
            <p style={{ marginBottom: '16px' }}>
              By accessing and using the Apex Trader Funding platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this platform.
            </p>

            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', marginTop: '24px', marginBottom: '12px' }}>
              2. Performance Account Terms
            </h3>
            <p style={{ marginBottom: '16px' }}>
              Performance Accounts (PAs) are funded trading accounts provided to traders who have successfully passed the evaluation process. Traders must adhere to all trading rules and risk parameters set forth by Apex Trader Funding.
            </p>

            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', marginTop: '24px', marginBottom: '12px' }}>
              3. Profit Sharing
            </h3>
            <p style={{ marginBottom: '16px' }}>
              Traders are entitled to receive a percentage of the profits generated on their Performance Account as specified in their account agreement. Profit payouts are processed according to the payout schedule and are subject to verification.
            </p>

            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', marginTop: '24px', marginBottom: '12px' }}>
              4. Trading Rules Compliance
            </h3>
            <p style={{ marginBottom: '16px' }}>
              All traders must comply with the trading rules at all times. Violation of any trading rule may result in account termination and forfeiture of any pending payouts.
            </p>

            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b', marginTop: '24px', marginBottom: '12px' }}>
              5. Account Termination
            </h3>
            <p style={{ marginBottom: '16px' }}>
              Apex Trader Funding reserves the right to terminate any account at its sole discretion for violation of terms, suspicious activity, or any other reason deemed necessary to protect the integrity of the platform.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
