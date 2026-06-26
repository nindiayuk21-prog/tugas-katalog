import React from 'react';

export default function ProductCard({ product, onTambah }) {
  const isTersedia = product.stock > 0;
  return (
    <div style={{
      background: '#ffffff',
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <span style={{ fontSize: '12px', textTransform: 'uppercase', color: '#6b7280', letterSpacing: '0.05em' }}>
          {product.category}
        </span>
        <span style={{
          fontSize: '11px',
          fontWeight: '600',
          padding: '4px 8px',
          borderRadius: '20px',
          backgroundColor: isTersedia ? '#ecfdf5' : '#fef2f2',
          color: isTersedia ? '#059669' : '#dc2626'
        }}>
          {isTersedia ? '• Tersedia' : '• Habis'}
        </span>
      </div>
      <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: '600', color: '#111827' }}>{product.name}</h3>
      <p style={{ margin: '0 0 20px 0', fontSize: '16px', fontWeight: '500', color: '#374151' }}>
        Rp {product.price.toLocaleString('id-ID')}
      </p>
      <button 
        disabled={!isTersedia} 
        onClick={() => onTambah(product)}
        style={{
          width: '100%',
          padding: '10px 0',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: isTersedia ? '#111827' : '#e5e7eb',
          color: isTersedia ? '#ffffff' : '#9ca3af',
          fontWeight: '600',
          cursor: isTersedia ? 'pointer' : 'not-allowed'
        }}
      >
        {isTersedia ? 'Tambah ke Keranjang' : 'Stok Habis'}
      </button>
    </div>
  );
}