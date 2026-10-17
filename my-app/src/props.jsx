function ProductCard({ name, price }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
    </div>
  );
}

function App() {
  return (
    <ProductCard name="Laptop" price={65000} />
  );
}

export default App;