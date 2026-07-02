import React, { useState } from 'react';

export default function CheckoutForm() {
  const [form, setForm] = useState({ nama: '', email: '' });
  const [errors, setErrors] = useState({ nama: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === 'nama') {
      setErrors(prev => ({ ...prev, nama: value.length < 3 ? 'Nama minimal harus 3 karakter' : '' }));
    }
    if (name === 'email') {
      setErrors(prev => ({ ...prev, email: !value.includes('@') ? 'Alamat email harus valid (mengandung "@")' : '' }));
    }
  };

  
  const isFormBelumLengkap = !form.nama || !form.email || errors.nama || errors.email;

  return (
    <div style={{ marginTop: '32px', padding: '24px', backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
      <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: '600', color: '#111827' }}>Informasi Pengiriman</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#4b5563', marginBottom: '6px' }}>Nama Lengkap</label>
          <input type="text" name="nama" value={form.nama} onChange={handleChange} placeholder="Nama Lengkap" style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #d1d5db', boxSizing: 'border-box', outline: 'none' }} />
          {errors.nama && <p style={{ color: '#dc2626', fontSize: '12px', margin: '4px 0 0 0' }}>{errors.nama}</p>}
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#4b5563', marginBottom: '6px' }}>Alamat Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="nama@example.com" style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #d1d5db', boxSizing: 'border-box', outline: 'none' }} />
          {errors.email && <p style={{ color: '#dc2626', fontSize: '12px', margin: '4px 0 0 0' }}>{errors.email}</p>}
        </div>
      </div>
      
      {!isFormBelumLengkap && (
        <div style={{ background: '#f9fafb', padding: '12px 16px', borderRadius: '8px', border: '1px solid #f3f4f6', marginBottom: '20px' }}>
          <span style={{ fontSize: '11px', fontWeight: '600', color: '#9ca3af', textTransform: 'uppercase' }}>Pratinjau Langsung</span>
          <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#374151' }}>Mengirim nota digital ke <strong>{form.nama}</strong> ({form.email})</p>
        </div>
      )}
      
      <button 
        disabled={isFormBelumLengkap} 
        style={{ 
          width: '100%', 
          padding: '12px 0', 
          borderRadius: '8px', 
          border: 'none', 
          backgroundColor: isFormBelumLengkap ? '#e5e7eb' : '#111827', 
          color: isFormBelumLengkap ? '#9ca3af' : '#ffffff', 
          fontWeight: '600', 
          cursor: isFormBelumLengkap ? 'not-allowed' : 'pointer', 
          fontSize: '15px' 
        }}
        onClick={() => alert('Checkout Berhasil!')}
      >
        {isFormBelumLengkap ? 'Silahkan isi data terlebih dahulu' : 'Checkout Sekarang'}
      </button>
    </div>
  );
}