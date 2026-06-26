import React from 'react';

export default function CartSidebar({ cart, onHapus }) {
  const subtotal = cart.reduce((total, item) => total + item.price, 0);
  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '16px',
      padding: '24px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
      border: '1px solid #e5e7eb',
      position: 'sticky',
      top: '24px'
    }}>
      <h2 style={{ margin: '0 0 20px 0', fontSize: '20px', fontWeight: '700', color: '#111827', borderBottom: '2px solid #f3f4f6', paddingBottom: '12px' }}>
        Keranjang Belanja
      </h2>
      {cart.length === 0 ? (
        <p style={{ color: '#6b7280', fontSize: '14px', textAlign: 'center', margin: '40px 0' }}>Keranjang Anda kosong.</p>
      ) : (
        <div style={{ maxHeight: '400px', overflowY: 'auto', marginBottom: '20px' }}>
          {cart.map((item, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #f3f4f6' }}>
              <div>
                <p style={{ margin: '0', fontSize: '14px', fontWeight: '500', color: '#111827' }}>{item.name}</p>
                <p style={{ margin: '2px 0 0 0', fontSize: '13px', color: '#6b7280' }}>Rp {item.price.toLocaleString('id-ID')}</p>
              </div>
              <button onClick={() => onHapus(index)} style={{ background: 'none', border: 'none', color: '#ef4444', fontSize: '13px', fontWeight: '500', cursor: 'pointer' }}>
                Hapus
              </button>
            </div>
          ))}
        </div>
      )}
      <div style={{ borderTop: '2px solid #f3f4f6', paddingTop: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', fontSize: '18px', color: '#111827' }}>
          <span>Total Harga</span>
          <span>Rp {subtotal.toLocaleString('id-ID')}</span>
        </div>
      </div>
    </div>
  );
} 