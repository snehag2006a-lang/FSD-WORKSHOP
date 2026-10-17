import React, { useState } from 'react';

export default function App() {
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
      color: '#C44569',
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
      backgroundColor: '#C44569',
      color: '#FFFFFF',
    },

    signUpButton: {
      backgroundColor: '#68A357',
      color: '#FFFFFF',
    },

    underline: {
      border: 'none',
      height: '2px',
      backgroundColor: '#F1D5DD',
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
      border: '1px solid #F3E1E5',
    },

    image: {
      width: '100%',
      height: '350px',
      objectFit: 'cover',
      borderRadius: '8px',
    },

    authBox: {
      width: '100%',
      maxWidth: '400px',
      padding: '30px',
      backgroundColor: '#FFF8FA',
      borderRadius: '10px',
      border: '1px solid #F1D5DD',
    },

    authTitle: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#7A2946',
    },

    input: {
      width: '100%',
      padding: '12px',
      marginBottom: '14px',
      border: '1px solid #D8BFC7',
      borderRadius: '6px',
      fontSize: '15px',
      boxSizing: 'border-box',
    },

    submitButton: {
      width: '100%',
      padding: '12px',
      backgroundColor: '#C44569',
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
          Rose Garden Nursery
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
                    color: '#C44569',
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
                    color: '#C44569',
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
            src="https://images.pexels.com/photos/714918/pexels-photo-714918.jpeg?cs=srgb&dl=assorted-color-of-rose-flowers-714918.jpg&fm=jpg"
            alt="Rose Nursery"
            style={styles.image}
          />

        </main>

      )}

    </div>
  );
}