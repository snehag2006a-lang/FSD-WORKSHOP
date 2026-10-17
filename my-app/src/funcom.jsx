function Welcome({ name }) {
  return <h1>Hello {name}!</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sneha" />
      <Welcome name="gadde" />
    </div>
  );
}

export default App;