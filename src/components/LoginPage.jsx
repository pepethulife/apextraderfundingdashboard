import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('dm75app@gmail.com');
  const [password, setPassword] = useState('••••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Left Side - Login Form */}
      <div style={{
        width: '50%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 80px'
      }}>
        <div style={{ maxWidth: '400px', width: '100%' }}>
          {/* Logo */}
          <div style={{ marginBottom: '40px' }}>
            <img
              src="/loginlogo.png"
              alt="Apex Trader Funding"
              style={{ height: '60px', width: 'auto' }}
            />
          </div>

          {/* Title */}
          <h1 style={{ fontSize: '24px', fontWeight: '600', color: '#1f2937', marginBottom: '32px' }}>
            Login to your Account
          </h1>

          {/* Form */}
          <form onSubmit={handleLogin}>
            {/* Email Input */}
            <div style={{ position: 'relative', marginBottom: '16px' }}>
              <User style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '20px',
                height: '20px',
                color: '#9ca3af'
              }} />
              <input
                type="text"
                placeholder="Username/Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  paddingLeft: '48px',
                  paddingRight: '16px',
                  paddingTop: '14px',
                  paddingBottom: '14px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: '#374151',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* Password Input */}
            <div style={{ position: 'relative', marginBottom: '20px' }}>
              <Lock style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '20px',
                height: '20px',
                color: '#9ca3af'
              }} />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  paddingLeft: '48px',
                  paddingRight: '48px',
                  paddingTop: '14px',
                  paddingBottom: '14px',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: '#374151',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0',
                  color: '#9ca3af'
                }}
              >
                {showPassword ? <EyeOff style={{ width: '20px', height: '20px' }} /> : <Eye style={{ width: '20px', height: '20px' }} />}
              </button>
            </div>

            {/* Login Button & Forgot Password */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <button
                type="submit"
                style={{
                  padding: '12px 32px',
                  backgroundColor: '#2563eb',
                  color: 'white',
                  fontWeight: '500',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                Login
              </button>
              <a href="#" style={{ color: '#2563eb', fontSize: '14px', textDecoration: 'underline' }}>
                Forgot password?
              </a>
            </div>
          </form>

          {/* Sign Up Link */}
          <p style={{ color: '#4b5563', fontSize: '14px', marginBottom: '40px' }}>
            Not registered yet?{' '}
            <a href="#" style={{ color: '#2563eb', textDecoration: 'underline', fontWeight: '500' }}>
              Signup here
            </a>
          </p>

        </div>
      </div>

      {/* Right Side - Dark Blue Background */}
      <div style={{ width: '50%', backgroundColor: '#092149' }}>
      </div>
    </div>
  );
}
