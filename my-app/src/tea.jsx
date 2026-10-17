import { useState } from "react";

function App() {
  const [showAuth, setShowAuth] = useState(false);
  const [authType, setAuthType] = useState("signin");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#fff8f0",
      fontFamily: "Arial, sans-serif",
    },

    header: {
      backgroundColor: "#8f5739",
      color: "white",
      padding: "20px 40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },

    title: {
      margin: 0,
      fontSize: "30px",
    },

    navLinks: {
      display: "flex",
      alignItems: "center",
      gap: "25px",
    },

    linkText: {
      color: "white",
      textDecoration: "none",
      cursor: "pointer",
      fontSize: "16px",
    },

    authButton: {
      backgroundColor: "#f4b860",
      color: "#995c3b",
      border: "none",
      padding: "10px 18px",
      borderRadius: "6px",
      cursor: "pointer",
      fontWeight: "bold",
      marginLeft: "10px",
    },

    contentContainer: {
      textAlign: "center",
      padding: "50px 20px",
    },

    image: {
      width: "80%",
      maxWidth: "800px",
      height: "400px",
      objectFit: "cover",
      borderRadius: "15px",
      marginTop: "25px",
    },

    authBox: {
      width: "350px",
      margin: "50px auto",
      padding: "30px",
      backgroundColor: "white",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
    },

    authTitle: {
      color: "#4b2e1e",
      marginBottom: "20px",
    },

    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      boxSizing: "border-box",
    },

    submit: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#4b2e1e",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "16px",
    },

    switch: {
      color: "#4b2e1e",
      cursor: "pointer",
      marginTop: "15px",
    },

    message: {
      marginTop: "15px",
      color: "#4b2e1e",
    },

    close: {
      marginTop: "15px",
      backgroundColor: "#ddd",
      border: "none",
      padding: "8px 15px",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage("Signup failed. Please try again.");
    }
  };

  const handleSignin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage("Signin failed. Please try again.");
    }
  };

  return (
    <div style={styles.container}>

      <header style={styles.header}>

        <h1 style={styles.title}>
          Chai Haven
        </h1>

        <div style={styles.navLinks}>

          <a href="#" style={styles.linkText}>
            Home
          </a>

          <a href="#" style={styles.linkText}>
            About
          </a>

          <button
            style={styles.authButton}
            onClick={() => {
              setShowAuth(true);
              setAuthType("signin");
              setMessage("");
            }}
          >
            Sign In
          </button>

          <button
            style={styles.authButton}
            onClick={() => {
              setShowAuth(true);
              setAuthType("signup");
              setMessage("");
            }}
          >
            Sign Up
          </button>

        </div>

      </header>

      {showAuth ? (

        <div style={styles.authBox}>

          <h2 style={styles.authTitle}>
            {authType === "signin"
              ? "Welcome Back"
              : "Create Your Account"}
          </h2>

          <form
            onSubmit={
              authType === "signin"
                ? handleSignin
                : handleSignup
            }
          >

            {authType === "signup" && (
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={styles.input}
                required
              />
            )}

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />

            <button
              type="submit"
              style={styles.submit}
            >
              {authType === "signin"
                ? "Sign In"
                : "Sign Up"}
            </button>

          </form>

          <p
            style={styles.switch}
            onClick={() => {
              setAuthType(
                authType === "signin"
                  ? "signup"
                  : "signin"
              );
              setMessage("");
            }}
          >
            {authType === "signin"
              ? "Don't have an account? Sign Up"
              : "Already have an account? Sign In"}
          </p>

          {message && (
            <p style={styles.message}>
              {message}
            </p>
          )}

          <button
            style={styles.close}
            onClick={() => setShowAuth(false)}
          >
            Close
          </button>

        </div>

      ) : (

        <main style={styles.contentContainer}>

          <h2>
            Welcome to Chai Haven ☕
          </h2>

          <p>
            Freshly brewed tea, warm moments, and good conversations.
          </p>

          <img
            src="https://static.vecteezy.com/system/resources/previews/030/182/885/non_2x/a-cup-of-tea-on-a-wooden-table-ai-generated-free-photo.jpg"
            alt="Freshly brewed tea"
            style={styles.image}
          />

        </main>

      )}

    </div>
  );
}

export default App;