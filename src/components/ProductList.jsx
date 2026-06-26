import React from 'react';
import ProductCard from './ProductCard.jsx';

export default function ProductList({ products, onTambah }) {
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
      gap: '20px' 
    }}>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onTambah={onTambah} 
          />
        ))
      ) : (
        <p style={{ 
          color: '#6b7280', 
          gridColumn: '1/-1', 
          textAlign: 'center', 
          padding: '40px' 
        }}>
          Produk tidak ditemukan.
        </p>
      )}
    </div>
  );
}