import { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import CartSidebar from './components/CartSidebar';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [searchInput, setSearchInput] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [sortBy, setSortBy] = useState('default');


  const [selectedCategory, setSelectedCategory] = useState('semua');


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (!res.ok) throw new Error('Gagal mengambil data produk dari server');
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchInput);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchInput]);

  
  const filteredProducts = products.filter((product) => {
  
    const matchSearch = product.title.toLowerCase().includes(debouncedSearch.toLowerCase());

  
    let matchCategory = true;
    if (selectedCategory === 'elektronik') {
      matchCategory = product.category === 'electronics';
    } else if (selectedCategory === 'perhiasan') {
      matchCategory = product.category === 'jewelery';
    } else if (selectedCategory === 'pria') {
      matchCategory = product.category === "men's clothing";
    } else if (selectedCategory === 'wanita') {
      matchCategory = product.category === "women's clothing";
    }

    return matchSearch && matchCategory;
  });


  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'termurah') return a.price - b.price;
    if (sortBy === 'termahal') return b.price - a.price;
    if (sortBy === 'nama') return a.title.localeCompare(b.title);
    return 0;
  });

  if (loading) return <div style={{ textAlign: 'center', marginTop: '50px' }}><h3>⏳ Loading produk...</h3></div>;
  if (error) return <div style={{ textAlign: 'center', marginTop: '50px', color: 'red' }}><h3>⚠️ {error}</h3></div>;

  
  const categories = [
    { id: 'semua', label: 'Semua Produk' },
    { id: 'elektronik', label: 'Elektronik' },
    { id: 'perhiasan', label: 'Perhiasan' },
    { id: 'pria', label: 'Pakaian Pria' },
    { id: 'wanita', label: 'Pakaian Wanita' }
  ];

  return (
    <div className="app-container" style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ marginBottom: '25px' }}>
        <h1>Katalog Produk Real-Time API</h1>
        
        {

        }
        <div style={{ display: 'flex', gap: '15px', marginTop: '15px', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="Cari nama produk..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            style={{ padding: '10px', width: '300px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '0.9rem' }}
          />

          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)} 
            style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '0.9rem', backgroundColor: '#fff', cursor: 'pointer' }}
          >
            <option value="default">Urutan: Default</option>
            <option value="termurah">Harga: Termurah</option>
            <option value="termahal">Harga: Termahal</option>
            <option value="nama">Nama: A-Z</option>
          </select>
        </div>

        {

        }
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                border: '1px solid #ced4da',
                fontSize: '0.85rem',
                cursor: 'pointer',
                fontWeight: '500',
                backgroundColor: selectedCategory === cat.id ? '#2c3e50' : '#fff',
                color: selectedCategory === cat.id ? '#fff' : '#333',
                transition: 'all 0.2s'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </header>

      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
        <ProductList products={sortedProducts} onSelectProduct={setSelectedProduct} />
        <CartSidebar />
      </div>

      {selectedProduct && <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  );
}

export default App;