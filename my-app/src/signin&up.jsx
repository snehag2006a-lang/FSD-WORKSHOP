import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const [showAuth, setShowAuth] = useState(false);
  const [authType, setAuthType] = useState('signin');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [message, setMessage] = useState('');

  const styles = {
    container: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
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
      gap: '20px',
    },

    title: {
      color: '#5C6AC4',
      fontSize: '28px',
      fontWeight: '700',
      margin: 0,
    },

    navLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      fontSize: '16px',
      fontWeight: '500',
      color: '#4A5568',
    },

    linkText: {
      cursor: 'pointer',
      color: '#4A5568',
      textDecoration: 'none',
    },

    authButton: {
      border: 'none',
      padding: '9px 16px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '14px',
    },

    signInButton: {
      backgroundColor: '#5C6AC4',
      color: '#FFFFFF',
    },

    signUpButton: {
      backgroundColor: '#48BB78',
      color: '#FFFFFF',
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
    },

    authBox: {
      width: '100%',
      maxWidth: '400px',
      padding: '30px',
      backgroundColor: '#F8FAFC',
      borderRadius: '10px',
      border: '1px solid #E2E8F0',
    },

    authTitle: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#2D3748',
    },

    input: {
      width: '100%',
      padding: '12px',
      marginBottom: '14px',
      border: '1px solid #CBD5E0',
      borderRadius: '6px',
      fontSize: '15px',
      boxSizing: 'border-box',
    },

    submitButton: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#5C6AC4',
      color: '#FFFFFF',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '600',
    },

    switchText: {
      textAlign: 'center',
      marginTop: '15px',
      color: '#4A5568',
      cursor: 'pointer',
    },

    message: {
      textAlign: 'center',
      marginTop: '15px',
      color: '#2F855A',
      fontWeight: '600',
    },

    closeButton: {
      float: 'right',
      border: 'none',
      background: 'transparent',
      fontSize: '20px',
      cursor: 'pointer',
    },
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'http://localhost:5000/api/signup',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      setMessage(data.message);

      if (response.ok) {
        setName('');
        setEmail('');
        setPassword('');
      }

    } catch (error) {
      setMessage('Backend server is not running');
    }
  };

  const handleSignin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'http://localhost:5000/api/signin',
        {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      setMessage(data.message);

      if (response.ok) {
        setEmail('');
        setPassword('');
      }

    } catch (error) {
      setMessage('Backend server is not running');
    }
  };


  return (
    <div style={styles.container}>
      <header style={styles.header}>

        <h1 style={styles.title}>
          Hello, World!
        </h1>

        <div style={styles.navLinks}>

          <span style={styles.linkText}>
            Home
          </span>

          <span style={styles.linkText}>
            About
          </span>

          <button
            style={{
              ...styles.authButton,
              ...styles.signInButton,
            }}
            onClick={() => {
              setAuthType('signin');
              setShowAuth(true);
              setMessage('');
            }}
          >
            Sign In
          </button>

          <button
            style={{
              ...styles.authButton,
              ...styles.signUpButton,
            }}
            onClick={() => {
              setAuthType('signup');
              setShowAuth(true);
              setMessage('');
            }}
          >
            Sign Up
          </button>

        </div>

      </header>


      <hr style={styles.underline} />


      {showAuth && (

        <div style={styles.contentContainer}>

          <div style={styles.authBox}>

            <button
              style={styles.closeButton}
              onClick={() => setShowAuth(false)}
            >
              ×
            </button>

            <h2 style={styles.authTitle}>

              {authType === 'signin'
                ? 'Sign In'
                : 'Create Account'}

            </h2>


            <form
              onSubmit={
                authType === 'signin'
                  ? handleSignin
                  : handleSignup
              }
            >

              {authType === 'signup' && (

                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  style={styles.input}
                  required
                />

              )}


              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                style={styles.input}
                required
              />


              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                style={styles.input}
                required
              />


              <button
                type="submit"
                style={styles.submitButton}
              >
                {authType === 'signin'
                  ? 'Sign In'
                  : 'Create Account'}
              </button>

            </form>


            {message && (
              <p style={styles.message}>
                {message}
              </p>
            )}

            {authType === 'signin' ? (

              <p style={styles.switchText}>
                Don't have an account?{' '}

                <span
                  onClick={() => {
                    setAuthType('signup');
                    setMessage('');
                  }}
                  style={{
                    color: '#5C6AC4',
                    fontWeight: '600',
                  }}
                >
                  Sign Up
                </span>
              </p>

            ) : (

              <p style={styles.switchText}>
                Already have an account?{' '}

                <span
                  onClick={() => {
                    setAuthType('signin');
                    setMessage('');
                  }}
                  style={{
                    color: '#5C6AC4',
                    fontWeight: '600',
                  }}
                >
                  Sign In
                </span>
              </p>

            )}

          </div>

        </div>

      )}

      {!showAuth && (

        <main style={styles.contentContainer}>

          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            alt="Scenic View"
            style={styles.image}
          />

          <div style={styles.counterSection}>
          </div>

        </main>

      )}

    </div>
  );
}                                                