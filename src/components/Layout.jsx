import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout({ title, children }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f1f5f9' }}>
      <Sidebar />
      <div style={{ marginLeft: '260px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Header title={title} />
        <main style={{ flex: 1, padding: '32px' }}>
          {children}
        </main>
      </div>
    </div>
  );
}
