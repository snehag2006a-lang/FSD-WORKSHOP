import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const styles = {
    container: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
      maxWidth: '900px',
      margin: '0 auto',
      padding: '24px 20px',
      color: '#333333',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingBottom: '16px',
    },
    title: {
      color: '#5C6AC4',
      fontSize: '28px',
      fontWeight: '700',
      margin: 0,
    },
    navLinks: {
      display: 'flex',
      gap: '20px',
      fontSize: '16px',
      fontWeight: '500',
      color: '#4A5568',
    },
    linkText: {
      cursor: 'pointer',
      transition: 'color 0.2s ease',
      color: '#4A5568',
      textDecoration: 'none',
    },
  
    underline: {
      border: 'none',
      height: '2px',
      backgroundColor: '#E2E8F0',
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
      backgroundColor: '#FFFFFF',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
      border: '1px solid #EDF2F7',
    },
    image: {
      width: '100%',
      height: '300px',
      objectFit: 'cover',
      borderRadius: '8px',
    },
    counterSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
      width: '100%',
    },
    button: {
      backgroundColor: '#5C6AC4',
      color: '#FFFFFF',
      border: 'none',
      padding: '10px 24px',
      fontSize: '16px',
      fontWeight: '600',
      borderRadius: '6px',
      cursor: 'pointer',
      boxShadow: '0 2px 6px rgba(92, 106, 196, 0.4)',
      transition: 'background-color 0.2s ease, transform 0.1s ease',
    },
  };

  return (
    <div style={styles.container}>
      
      <header style={styles.header}>
        <h1 style={styles.title}>Hello, World!</h1>
        <div style={styles.navLinks}>
          <span style={styles.linkText}>Home</span>
          <span style={styles.linkText}>About</span>
        </div>
      </header>

     
      <hr style={styles.underline} />

      <main style={styles.contentContainer}>
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          alt="Scenic View"
          style={styles.image}
        />
        <div style={styles.counterSection}>
          <button
            style={styles.button}
            onClick={() => setCount((prev) => prev + 1)}
          >
            count {count}
          </button>
        </div>
      </main>
    </div>
  );
}