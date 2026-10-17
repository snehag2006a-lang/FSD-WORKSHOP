import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const styles = {
    container: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
      maxWidth: '900px',
      margin: '0 auto',
      padding: '24px 20px',
      color: '#3f3a36',
      backgroundColor: '#fffaf3',
    },

    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: '16px',
    },

    title: {
      color: '#8b5e3c',
      fontSize: '28px',
      fontWeight: '700',
      margin: 0,
    },

    navLinks: {
      display: 'flex',
      gap: '20px',
      fontSize: '16px',
      fontWeight: '500',
      color: '#6b5748',
    },

    linkText: {
      cursor: 'pointer',
      transition: 'color 0.2s ease',
      color: '#6b5748',
      textDecoration: 'none',
    },

    underline: {
      border: 'none',
      height: '2px',
      backgroundColor: '#ead8c5',
      margin: '0 0 32px 0',
      width: '100%',
    },

    contentContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '24px',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '24px',
      backgroundColor: '#ffffff',
      borderRadius: '18px',
      boxShadow: '0 6px 18px rgba(100, 70, 40, 0.12)',
      border: '1px solid #f0e2d2',
    },

    image: {
      width: '100%',
      height: '300px',
      objectFit: 'cover',
      borderRadius: '12px',
    },

    counterSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
      width: '100%',
    },

    button: {
      backgroundColor: '#b9784b',
      color: '#FFFFFF',
      border: 'none',
      padding: '10px 24px',
      fontSize: '16px',
      fontWeight: '600',
      borderRadius: '20px',
      cursor: 'pointer',
      boxShadow: '0 3px 8px rgba(185, 120, 75, 0.35)',
      transition: 'background-color 0.2s ease, transform 0.1s ease',
    },
  };

  return (
    <div style={styles.container}>

      <header style={styles.header}>
        <h1 style={styles.title}>📚 Little Book Corner</h1>

        <div style={styles.navLinks}>
          <span style={styles.linkText}>Home</span>
          <span style={styles.linkText}>Books</span>
          <span style={styles.linkText}>About</span>
        </div>
      </header>

      <hr style={styles.underline} />

      <main style={styles.contentContainer}>

        <img
          src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80"
          alt="Books and Reading"
          style={styles.image}
        />

        <div style={styles.counterSection}>

          <button
            style={styles.button}
            onClick={() => setCount((prev) => prev + 1)}
          >
            📖 Books Read {count}
          </button>

        </div>

      </main>

    </div>
  );
}