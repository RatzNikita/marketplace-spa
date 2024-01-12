import React from 'react';
import './index.css';
import ProductCard, {Product} from 'entities/product/ui';

const stubProduct: Product = {
  id: 1,
  title: 'iPhone 9',
  description: 'An apple mobile which is nothing like apple',
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: 'Apple',
  category: 'smartphones',
  thumbnail: 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg',
  images: ['https://cdn.dummyjson.com/product-images/1/1.jpg', 'https://cdn.dummyjson.com/product-images/1/2.jpg', 'https://cdn.dummyjson.com/product-images/1/3.jpg', 'https://cdn.dummyjson.com/product-images/1/4.jpg', 'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg'],
};

function App() {
  return (
    <div className="App">
      <main>
        <ProductCard product={stubProduct} />
      </main>
    </div>
  );
}

export default App;
