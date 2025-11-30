import Layout from '../components/Layout';

export default function TradingRulesPage() {
  const ruleCardStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    marginBottom: '16px',
    overflow: 'hidden'
  };

  const ruleHeaderStyle = {
    backgroundColor: '#092149',
    color: 'white',
    padding: '14px 20px',
    fontSize: '16px',
    fontWeight: '600'
  };

  const ruleBodyStyle = {
    padding: '20px',
    fontSize: '14px',
    color: '#475569',
    lineHeight: '1.7'
  };

  return (
    <Layout title="Trading Rules">
      <div style={{ maxWidth: '900px' }}>
        <div style={{
          backgroundColor: '#fef3c7',
          border: '1px solid #fcd34d',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '24px',
          color: '#92400e',
          fontSize: '14px'
        }}>
          <strong>Important:</strong> Violation of any trading rule may result in account termination. Please review all rules carefully before trading.
        </div>

        <div style={ruleCardStyle}>
          <div style={ruleHeaderStyle}>Daily Loss Limit</div>
          <div style={ruleBodyStyle}>
            <p style={{ margin: '0 0 12px 0' }}>
              Your account has a maximum daily loss limit based on your account size. This is calculated from your daily starting balance.
            </p>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>$50K Account: $1,250 daily loss limit</li>
              <li>$100K Account: $2,500 daily loss limit</li>
              <li>$150K Account: $3,750 daily loss limit</li>
              <li>$250K Account: $6,250 daily loss limit</li>
            </ul>
          </div>
        </div>

        <div style={ruleCardStyle}>
          <div style={ruleHeaderStyle}>Trailing Drawdown</div>
          <div style={ruleBodyStyle}>
            <p style={{ margin: '0 0 12px 0' }}>
              Your account has a trailing drawdown that follows your highest balance until it reaches your starting balance + threshold. After that, it becomes static.
            </p>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>Trails your highest end-of-day balance</li>
              <li>Stops trailing once you reach safety threshold</li>
              <li>Based on end-of-day balance, not intraday</li>
            </ul>
          </div>
        </div>

        <div style={ruleCardStyle}>
          <div style={ruleHeaderStyle}>Trading Hours</div>
          <div style={ruleBodyStyle}>
            <p style={{ margin: '0 0 12px 0' }}>
              All positions must be closed before the daily close. No holding positions overnight or through weekends.
            </p>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>Trading begins: 6:00 PM ET (Sunday)</li>
              <li>Daily close: 4:59 PM ET (Monday-Friday)</li>
              <li>All positions must be flat by 4:59 PM ET</li>
            </ul>
          </div>
        </div>

        <div style={ruleCardStyle}>
          <div style={ruleHeaderStyle}>News Trading</div>
          <div style={ruleBodyStyle}>
            <p style={{ margin: 0 }}>
              Trading during major economic news events is permitted but traders should exercise caution due to increased volatility and potential slippage. No specific restrictions on news trading.
            </p>
          </div>
        </div>

        <div style={ruleCardStyle}>
          <div style={ruleHeaderStyle}>Consistency Rule</div>
          <div style={ruleBodyStyle}>
            <p style={{ margin: 0 }}>
              No single trading day can account for more than 30% of your total profits at the time of payout request. This ensures consistent trading performance over time.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
