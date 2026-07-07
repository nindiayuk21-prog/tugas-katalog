import { useCart } from '../context/CartContext'; 

function ProductCard({ product, onSelect }) {
  const { addToCart } = useCart(); 
  const hargaRupiah = Math.round(product.price * 15000);

  return (
    <div 
      className="product-card" 
      onClick={() => onSelect(product)}
      style={{ 
        border: '1px solid #e0e0e0', 
        borderRadius: '12px', 
        padding: '16px', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        height: '400px', 
        backgroundColor: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        cursor: 'pointer' 
      }}
    >
      <div>
        {

        }
        <div style={{ width: '100%', height: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '12px' }}>
          <img src={product.image} alt={product.title} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
        </div>

        {

        }
        <h3 
          style={{ 
            fontSize: '0.85rem', 
            fontWeight: '600',
            margin: '0 0 8px 0', 
            height: '40px', 
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2, 
            WebkitBoxOrient: 'vertical',
            lineHeight: '1.4'
          }}
        >
          {product.title}
        </h3>

        {

        }
        <p style={{ fontWeight: 'bold', color: '#2c3e50', margin: '0 0 12px 0', fontSize: '1rem' }}>
          {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(hargaRupiah)}
        </p>
      </div>
      
      {

      }
      <button 
        style={{ 
          padding: '10px', 
          cursor: 'pointer', 
          width: '100%',
          backgroundColor: '#f8f9fa',
          border: '1px solid #ced4da',
          borderRadius: '6px',
          fontWeight: '500'
        }}
        onClick={(e) => {
          e.stopPropagation();
          addToCart(product); 
        }}
      >
        + Tambah
      </button>
    </div>
  );
}

export default ProductCard;