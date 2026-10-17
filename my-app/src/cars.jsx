import './App.css'

function App() {
  return (
    <>
      {/* NAVBAR */}
      <header>
        <nav className="navbar">

          <div className="logo">
            <span>A</span>utoWorld
            <img
              src="https://cdn-icons-png.flaticon.com/512/741/741407.png"
              alt="Car Logo"
            />
          </div>

          <div className="nav-links">
            <ul>
              <li><a href="#home">HOME</a></li>
              <li><a href="#cars">CARS</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </div>

        </nav>
      </header>

      <hr />

      {/* FIRST HERO SECTION */}
      <section className="hero-section" id="home">

        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80"
          alt="Luxury Sports Car"
        />

        <div className="hero-text">
          <h1>
            <span>L</span>uxury Cars
          </h1>

          <p>Drive Your Dream</p>
        </div>

      </section>


      {/* SECOND SECTION */}
      <section className="second-section" id="cars">

        <div className="second-image">
          <img
            src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80"
            alt="Luxury Car"
          />
        </div>

        <div className="second-text">
          <h1>
            <span>P</span>remium Collection
          </h1>

          <p>
            Experience powerful performance, elegant design
            and unforgettable driving.
          </p>

          <button>Explore Cars</button>
        </div>

      </section>


      {/* THIRD SECTION */}
      <section className="third-section" id="about">

        <div className="third-text">
          <h1>
            <span>F</span>eel The Power
          </h1>

          <p>
            Discover a new world of speed, technology and
            comfort with our exclusive collection.
          </p>
        </div>

        <div className="third-image">
          <img
            src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80"
            alt="Sports Car"
          />
        </div>

      </section>


      {/* FOOTER */}
      <footer id="contact">
        <h2>AutoWorld</h2>
        <p>Luxury • Performance • Style</p>
      </footer>

    </>
  )
}

export default App