import Layout from '../components/Layout';

export default function TradingToolsPage() {
  const toolCardStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    padding: '24px',
    marginBottom: '16px'
  };

  const toolTitleStyle = {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1e293b',
    marginTop: 0,
    marginBottom: '8px'
  };

  const toolDescStyle = {
    fontSize: '14px',
    color: '#64748b',
    margin: 0,
    lineHeight: '1.6'
  };

  return (
    <Layout title="Trading Tools and Resources">
      <div style={{ maxWidth: '900px' }}>
        <div style={{
          backgroundColor: '#dbeafe',
          border: '1px solid #93c5fd',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '24px',
          color: '#1e40af',
          fontSize: '14px'
        }}>
          Access our suite of trading tools and educational resources to help improve your trading performance.
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1e293b', marginBottom: '16px' }}>
          Trading Platforms
        </h2>

        <div style={toolCardStyle}>
          <h3 style={toolTitleStyle}>NinjaTrader 8</h3>
          <p style={toolDescStyle}>
            Industry-leading trading platform with advanced charting, analysis tools, and automated trading capabilities. Download and connect to your funded account.
          </p>
        </div>

        <div style={toolCardStyle}>
          <h3 style={toolTitleStyle}>Tradovate</h3>
          <p style={toolDescStyle}>
            Cloud-based futures trading platform accessible from any device. Features commission-free trading and real-time market data.
          </p>
        </div>

        <div style={toolCardStyle}>
          <h3 style={toolTitleStyle}>Rithmic</h3>
          <p style={toolDescStyle}>
            Professional-grade trading infrastructure with ultra-low latency execution and comprehensive market data feeds.
          </p>
        </div>

        <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#1e293b', marginTop: '32px', marginBottom: '16px' }}>
          Educational Resources
        </h2>

        <div style={toolCardStyle}>
          <h3 style={toolTitleStyle}>Trading Academy</h3>
          <p style={toolDescStyle}>
            Free access to our comprehensive trading education library including video tutorials, webinars, and trading guides.
          </p>
        </div>

        <div style={toolCardStyle}>
          <h3 style={toolTitleStyle}>Market Analysis</h3>
          <p style={toolDescStyle}>
            Daily market analysis and trade ideas from our team of experienced analysts to help inform your trading decisions.
          </p>
        </div>

        <div style={toolCardStyle}>
          <h3 style={toolTitleStyle}>Trading Community</h3>
          <p style={toolDescStyle}>
            Join our Discord community to connect with other traders, share ideas, and learn from successful funded traders.
          </p>
        </div>
      </div>
    </Layout>
  );
}
