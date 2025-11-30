import { useState } from 'react';
import Layout from '../components/Layout';
import { Send, CheckCircle } from 'lucide-react';

export default function HelpPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    subject: '',
    category: 'general',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    fontSize: '14px',
    color: '#374151',
    backgroundColor: 'white',
    boxSizing: 'border-box'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '6px'
  };

  if (submitted) {
    return (
      <Layout title="Help & Support">
        <div style={{ maxWidth: '600px' }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            border: '1px solid #e2e8f0',
            padding: '48px',
            textAlign: 'center'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#dcfce7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px'
            }}>
              <CheckCircle size={32} style={{ color: '#22c55e' }} />
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#1e293b', margin: '0 0 12px' }}>
              Message Sent!
            </h2>
            <p style={{ color: '#64748b', fontSize: '15px', margin: '0 0 24px', lineHeight: '1.6' }}>
              Thank you for contacting us. Our support team will review your message and get back to you within 24-48 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ subject: '', category: 'general', message: '' });
              }}
              style={{
                backgroundColor: '#092149',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              Send Another Message
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Help & Support">
      <div style={{ maxWidth: '800px' }}>
        {/* Info Box */}
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
          Need assistance? Fill out the form below and our support team will get back to you as soon as possible. For urgent matters, please include "URGENT" in your subject line.
        </div>

        {/* Contact Form */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          border: '1px solid #e2e8f0',
          overflow: 'hidden'
        }}>
          <div style={{
            backgroundColor: '#092149',
            padding: '16px 24px'
          }}>
            <h2 style={{ margin: 0, color: 'white', fontSize: '18px', fontWeight: '600' }}>
              Contact Support
            </h2>
          </div>

          <form onSubmit={handleSubmit} style={{ padding: '24px' }}>
            {/* Category */}
            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                style={inputStyle}
              >
                <option value="general">General Inquiry</option>
                <option value="account">Account Issues</option>
                <option value="payout">Payout Questions</option>
                <option value="trading">Trading Rules</option>
                <option value="technical">Technical Support</option>
                <option value="billing">Billing & Payments</option>
              </select>
            </div>

            {/* Subject */}
            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>Subject</label>
              <input
                type="text"
                placeholder="Brief description of your issue"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                style={inputStyle}
                required
              />
            </div>

            {/* Message */}
            <div style={{ marginBottom: '24px' }}>
              <label style={labelStyle}>Message</label>
              <textarea
                placeholder="Please describe your issue in detail..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                style={{
                  ...inputStyle,
                  resize: 'vertical',
                  minHeight: '120px'
                }}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                backgroundColor: '#092149',
                color: 'white',
                padding: '14px 28px',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '15px',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Send size={18} />
              Submit Request
            </button>
          </form>
        </div>

      </div>
    </Layout>
  );
}
