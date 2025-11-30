import Layout from '../components/Layout';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { accountData } from '../data/mockData';

// Generate mock historical data for each PA over 30 days
const generateChartData = (accountData) => {
  const days = 30;
  const data = [];

  for (let day = 1; day <= days; day++) {
    const dayData = { day: `Day ${day}` };

    accountData.forEach((account, index) => {
      const finalPnl = account.pnl;
      const progress = day / days;
      const variance = (Math.random() - 0.5) * 100;
      const value = Math.round(finalPnl * progress * (0.8 + Math.random() * 0.4) + variance);
      dayData[`PA${index + 1}`] = Math.max(0, Math.min(value, finalPnl + 200));
    });

    data.push(dayData);
  }

  const lastDay = data[days - 1];
  accountData.forEach((account, index) => {
    lastDay[`PA${index + 1}`] = account.pnl;
  });

  return data;
};

const colors = [
  '#3b82f6', '#ef4444', '#22c55e', '#f59e0b', '#8b5cf6',
  '#ec4899', '#06b6d4', '#84cc16', '#f97316', '#6366f1',
  '#14b8a6', '#e11d48', '#0ea5e9', '#a855f7', '#10b981',
  '#f43f5e', '#0891b2', '#65a30d', '#d946ef', '#059669'
];

export default function ChartsPage() {
  const chartData = generateChartData(accountData);

  return (
    <Layout title="PA Performance Charts">
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        border: '1px solid #e2e8f0',
        overflow: 'hidden'
      }}>
        {/* Chart Header */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid #e2e8f0',
          backgroundColor: '#092149'
        }}>
          <h2 style={{ margin: 0, color: 'white', fontSize: '18px', fontWeight: '600' }}>
            All 20 PA Accounts - 30 Day Performance
          </h2>
        </div>

        {/* Chart */}
        <div style={{ padding: '24px', height: '500px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis
                dataKey="day"
                tick={{ fontSize: 12 }}
                interval={4}
              />
              <YAxis
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip
                formatter={(value) => [`$${value}`, '']}
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              />
              <Legend
                wrapperStyle={{ fontSize: '11px' }}
                iconSize={8}
              />
              {accountData.map((account, index) => (
                <Line
                  key={account.id}
                  type="monotone"
                  dataKey={`PA${index + 1}`}
                  name={`PA-${158432 + account.id}`}
                  stroke={colors[index]}
                  strokeWidth={1.5}
                  dot={false}
                  activeDot={{ r: 4 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Footer */}
        <div style={{
          padding: '16px 24px',
          borderTop: '1px solid #e2e8f0',
          backgroundColor: '#f8fafc',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div style={{ fontSize: '14px', color: '#64748b' }}>
            Showing performance over 30 trading days
          </div>
          <div style={{ fontSize: '14px', fontWeight: '600', color: '#092149' }}>
            Total PNL: ${accountData.reduce((sum, a) => sum + a.pnl, 0).toLocaleString()}
          </div>
        </div>
      </div>
    </Layout>
  );
}
