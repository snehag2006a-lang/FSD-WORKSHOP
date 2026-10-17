import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fdf4ff)',
      fontFamily: 'Arial, sans-serif',
      padding: '35px 20px',
      color: '#4a3b42',
    },

    header: {
      maxWidth: '850px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '18px 25px',
      backgroundColor: '#ffffff',
      borderRadius: '20px',
    },

    title: {
      margin: 0,
      fontSize: '26px',
      color: '#c2416c',
      fontWeight: '700',
    },

    navLinks: {
      display: 'flex',
      gap: '22px',
      fontSize: '14px',
      fontWeight: '600',
      color: '#7c5263',
      
    },

    contentContainer: {
      maxWidth: '620px',
      margin: '55px auto',
      backgroundColor: '#ffffff',
      padding: '25px',
      borderRadius: '28px',
      boxShadow: '0 15px 35px rgba(120, 80, 100, 0.15)',
      textAlign: 'center',
    },

    image: {
      width: '100%',
      height: '300px',
      objectFit: 'cover',
      borderRadius: '22px',
    },

    heading: {
      margin: '22px 0 8px',
      fontSize: '25px',
      color: '#8f3d5c',
    },

    description: {
      color: '#8a6a76',
      fontSize: '15px',
      lineHeight: '1.6',
      marginBottom: '22px',
    },

    counterSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
    },

    countText: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#6b4655',
    },

    button: {
      backgroundColor: '#e8799b',
      color: '#ffffff',
      border: 'none',
      padding: '12px 28px',
      borderRadius: '25px',
      fontSize: '15px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>

      <header style={styles.header}>
        <h1 style={styles.title}>☕ Cozy Café</h1>

        <div style={styles.navLinks}>
          <span>Home</span>
          <span>Menu</span>
          <span>Contact</span>
        </div>
      </header>

      <main style={styles.contentContainer}>

        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80"
          alt="Cozy Coffee"
          style={styles.image}
        />

        <h2 style={styles.heading}>A Little Cup of Happiness♥️</h2>

        <p style={styles.description}>
          Fresh coffee in this cool weather ☔!
          Click me if you want another cup!
        </p>

        <div style={styles.counterSection}>

          <div style={styles.countText}>
            ☕ Cups ordered: {count}
          </div>

          <button
            style={styles.button}
            onClick={() => setCount((prev) => prev + 1)}
          >
            Add one Cup 🍵
          </button>

        </div>

      </main>

    </div>
  );
}