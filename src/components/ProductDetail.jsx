function ProductDetail({ product, onClose }) {
  const hargaRupiah = Math.round(product.price * 15000);

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose} 
      style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', display: 'flex',
        justifyContent: 'center', alignItems: 'center', zIndex: 1000
      }}
    >
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()} 
        style={{
          backgroundColor: '#fff', padding: '24px', borderRadius: '8px',
          maxWidth: '500px', width: '90%', maxHeight: '80vh', overflowY: 'auto'
        }}
      >
        <img 
          src={product.image} 
          alt={product.title} 
          style={{ width: '100%', maxHeight: '200px', objectFit: 'contain', marginBottom: '16px' }} 
        />
        <h2>{product.title}</h2>
        <p style={{ color: '#7f8c8d', fontStyle: 'italic' }}>Kategori: {product.category}</p>
        <p style={{ lineHeight: '1.6' }}>{product.description}</p>
        <p style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#2c3e50' }}>
          Harga: {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(hargaRupiah)}
        </p>
        <button 
          onClick={onClose}
          style={{ padding: '8px 16px', background: '#e74c3c', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Tutup
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;