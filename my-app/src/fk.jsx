import { useState } from 'react';

const PRODUCTS = [
  {
    id: 1,
    title: "POCO M6 Pro 5G (Forest Green, 128 GB)",
    price: 9999,
    originalPrice: 14999,
    discount: "33% off",
    rating: 4.3,
    reviews: "1,24,532",
    image: "https://via.placeholder.com/200x200?text=POCO+M6+Pro",
    category: "Mobiles",
    tag: "Top Selling"
  },
  {
    id: 2,
    title: "Apple iPhone 15 (Black, 128 GB)",
    price: 65999,
    originalPrice: 79900,
    discount: "17% off",
    rating: 4.6,
    reviews: "45,892",
    image: "https://via.placeholder.com/200x200?text=iPhone+15",
    category: "Mobiles",
    tag: "Bank Offer"
  },
  {
    id: 3,
    title: "ASUS TUF Gaming F15 Core i5 11th Gen",
    price: 49990,
    originalPrice: 75990,
    discount: "34% off",
    rating: 4.4,
    reviews: "12,410",
    image: "https://via.placeholder.com/200x200?text=ASUS+TUF",
    category: "Laptops",
    tag: "Freebie"
  },
  {
    id: 4,
    title: "Nike Revolution 6 Running Shoes For Men",
    price: 2495,
    originalPrice: 3695,
    discount: "32% off",
    rating: 4.1,
    reviews: "8,920",
    image: "https://via.placeholder.com/200x200?text=Nike+Shoes",
    category: "Fashion",
    tag: "Trending"
  }
];

export default function App() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ fontFamily: 'Roboto, Arial, sans-serif', backgroundColor: '#f1f3f6', minHeight: '100vh', margin: 0 }}>
      <header style={{ backgroundColor: '#2874f0', color: '#fff', padding: '10px 15%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', sticky: 'top', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexGrow: 1 }}>
          <div style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: '20px', cursor: 'pointer' }}>
            Flipkart
            <span style={{ fontSize: '11px', display: 'block', color: '#ffe500', marginTop: '-4px' }}>
              Plus <span style={{ color: '#fff' }}>+</span>
            </span>
          </div>
          <input
            type="text"
            placeholder="Search for products, brands and more"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ width: '50%', padding: '9px 16px', border: 'none', borderRadius: '2px', outline: 'none', fontSize: '14px' }}
          />
        </div>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <button style={{ backgroundColor: '#fff', color: '#2874f0', border: '1px solid #dbdbdb', padding: '7px 40px', fontWeight: 'bold', borderRadius: '2px', cursor: 'pointer' }}>
            Login
          </button>
          <span style={{ fontWeight: '500', cursor: 'pointer' }}>Become a Seller</span>
          <span style={{ fontWeight: '500', cursor: 'pointer' }}>
            Cart ({cart.length})
          </span>
        </div>
      </header>

      <div style={{ backgroundColor: '#fff', padding: '10px 15%', display: 'flex', justifyContent: 'space-around', boxShadow: '0 1px 1px 0 rgba(0,0,0,.16)', marginBottom: '10px' }}>
        {['All', 'Mobiles', 'Laptops', 'Fashion'].map((cat) => (
          <div
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              cursor: 'pointer',
              fontWeight: selectedCategory === cat ? 'bold' : '500',
              color: selectedCategory === cat ? '#2874f0' : '#000',
              fontSize: '14px'
            }}
          >
            {cat}
          </div>
        ))}
      </div>

      <main style={{ padding: '0 15%' }}>
        <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '2px', boxShadow: '0 2px 4px 0 rgba(0,0,0,.08)' }}>
          <h2 style={{ fontSize: '20px', margin: '0 0 15px 0', borderBottom: '1px solid #f0f0f0', paddingBottom: '10px' }}>
            Deals of the Day
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '15px' }}>
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                style={{
                  border: '1px solid #f0f0f0',
                  borderRadius: '4px',
                  padding: '15px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  transition: 'box-shadow 0.2s',
                  backgroundColor: '#fff'
                }}
              >
                <div>
                  <img src={product.image} alt={product.title} style={{ height: '150px', objectFit: 'contain', marginBottom: '10px' }} />
                  <div style={{ fontSize: '12px', color: '#388e3c', fontWeight: 'bold', marginBottom: '5px' }}>{product.tag}</div>
                  <h3 style={{ fontSize: '14px', fontWeight: '500', margin: '5px 0', height: '36px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {product.title}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', margin: '5px 0' }}>
                    <span style={{ backgroundColor: '#388e3c', color: '#fff', fontSize: '12px', padding: '2px 4px', borderRadius: '3px', fontWeight: 'bold' }}>
                      {product.rating} ★
                    </span>
                    <span style={{ fontSize: '12px', color: '#878787' }}>({product.reviews})</span>
                  </div>
                  <div style={{ margin: '8px 0' }}>
                    <span style={{ fontSize: '16px', fontWeight: 'bold' }}>₹{product.price.toLocaleString()}</span>
                    <span style={{ fontSize: '12px', color: '#878787', textDecoration: 'line-through', marginLeft: '8px' }}>
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                    <span style={{ fontSize: '12px', color: '#388e3c', fontWeight: 'bold', marginLeft: '8px' }}>
                      {product.discount}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  style={{
                    backgroundColor: '#ff9f00',
                    color: '#fff',
                    border: 'none',
                    padding: '10px',
                    fontWeight: 'bold',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    marginTop: '10px'
                  }}
                >
                  ADD TO CART
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}