import ProductCard from './ProductCard';

function ProductList({ products, onSelectProduct }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', flex: 3 }}>
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onSelect={onSelectProduct}
        />
      ))}
    </div>
  );
}

export default ProductList;