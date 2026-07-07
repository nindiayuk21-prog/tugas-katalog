import { useCart } from '../context/CartContext'; 
function CartSidebar() {
  const { cart, removeFromCart } = useCart(); 

  const totalBelanja = cart.reduce((total, item) => {
    const hargaRupiah = Math.round(item.price * 15000);
    return total + (hargaRupiah * item.qty);
  }, 0);

  return (
    <div className="cart-sidebar" style={{ flex: 1, borderLeft: '2px solid #eee', paddingLeft: '20px', minWidth: '250px' }}>
      <h2>🛒 Keranjang Belanja</h2>
      {cart.length === 0 ? (
        <p style={{ color: '#95a5a6' }}>Keranjang masih kosong.</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cart.map((item) => {
              const hargaRupiah = Math.round(item.price * 15000);
              return (
                <li key={item.id} style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '10px' }}>
                  <h4 style={{ margin: '0 0 5px 0', fontSize: '0.9rem' }}>{item.title}</h4>
                  <p style={{ margin: '0', fontSize: '0.85rem', color: '#7f8c8d' }}>
                    {item.qty} x {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(hargaRupiah)}
                  </p>
                  <button 
                    onClick={() => removeFromCart(item.id)} 
                    style={{ background: 'none', border: 'none', color: '#e74c3c', cursor: 'pointer', padding: 0, fontSize: '0.8rem', marginTop: '5px' }}
                  >
                    Hapus
                  </button>
                </li>
              );
            })}
          </ul>
          <hr />
          <h3>Total: {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(totalBelanja)}</h3>
        </>
      )}
    </div>
  );
}

export default CartSidebar;