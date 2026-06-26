import React, { useState, useEffect } from 'react';

import { productsData } from './data/products';
import ProductCard from './components/ProductCard';
import CartSidebar from './components/CartSidebar';
import CheckoutForm from './components/CheckoutForm';

export default function App() {
  const [products] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState('');
  const [kategoriTerpilih, setKategoriTerpilih] = useState('Semua');

  useEffect(() => {
    console.log("App loaded");
  }, []);

  useEffect(() => {
    document.title = cart.length > 0 ? `Keranjang (${cart.length}) • Mini Product Catalog` : 'Mini Product Catalog';
  }, [cart]);

  const handleTambahKeCart = (product) => {
    setCart([...cart, product]);
  };

  const handleHapusDariCart = (indexTarget) => {
    setCart(cart.filter((_, index) => index !== indexTarget));
  };

  const produkDifilter = products.filter((product) => {
    const cocokQuery = product.name.toLowerCase().includes(query.toLowerCase());
    const cocokKategori = kategoriTerpilih === 'Semua' || product.category === kategoriTerpilih;
    return cocokQuery && cocokKategori;
  });

  return (
    <div style={{ backgroundColor: '#faf9f6', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif', margin: 0 }}>
      
      <header style={{ 
        backgroundColor: '#ffffff', 
        color: '#111827', 
        padding: '28px 40px', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        borderBottom: '1px solid #e5e7eb',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)'
      }}>
        <h1 style={{ margin: '0', fontSize: '26px', fontWeight: '800', letterSpacing: '0.05em', textAlign: 'center' }}>
        </h1>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '2.5fr 1fr', gap: '40px', padding: '40px', maxWidth: '1400px', margin: '0 auto' }}>
        <div>
          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', alignItems: 'center' }}>
            <input 
              type="text" 
              placeholder="Cari produk di sini..." 
              value={query} 
              onChange={(e) => setQuery(e.target.value)}
              style={{ flex: 1, padding: '12px 16px', borderRadius: '8px', border: '1px solid #e5e7eb', backgroundColor: '#ffffff', fontSize: '14px', outline: 'none' }}
            />
            <div style={{ display: 'flex', gap: '8px' }}>
              {['Semua', 'Makanan', 'Minuman'].map((kat) => (
                <button
                  key={kat}
                  onClick={() => setKategoriTerpilih(kat)}
                  style={{
                    padding: '10px 18px',
                    borderRadius: '20px',
                    border: '1px solid',
                    borderColor: kategoriTerpilih === kat ? '#111827' : '#e5e7eb',
                    backgroundColor: kategoriTerpilih === kat ? '#111827' : '#ffffff',
                    color: kategoriTerpilih === kat ? '#ffffff' : '#374151',
                    fontWeight: '500',
                    fontSize: '13px',
                    cursor: 'pointer'
                  }}
                >
                  {kat}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {produkDifilter.length > 0 ? (
              produkDifilter.map((product) => (
                <ProductCard key={product.id} product={product} onTambah={handleTambahKeCart} />
              ))
            ) : (
              <p style={{ color: '#6b7280', gridColumn: '1/-1', textAlign: 'center', padding: '40px' }}>Produk tidak ditemukan.</p>
            )}
          </div>

          <CheckoutForm />
        </div>

        <div>
          <CartSidebar cart={cart} onHapus={handleHapusDariCart} />
        </div>
      </div>
    </div>
  );
}