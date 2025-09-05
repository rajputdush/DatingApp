import { Link } from "react-router-dom";
// import 'bootstrap-icons/font/bootstrap-icons.css';


const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="vh-100 d-flex fade-in flex-column justify-content-center align-items-center text-center text-white"
        style={{backgroundImage: '',backgroundSize: 'cover',backgroundPosition: 'center',}}>
        <h1 className="display-4  fw-bold">Your Luxury Companion, for Just One Day</h1>
        <p className="lead mt-3">Premium companionship experiences designed for modern women.</p>
        <div className="mt-4">
          <button className="btn btn-light me-3 px-4 py-2">Book Now</button>
          <button className="btn btn-outline-light px-4 py-2">Explore Companions</button>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-5 text-center bg-white">
        <h2 className="mb-4">Why Choose OneDayCompanion</h2>
        <div className="container d-flex align-items-center bg-inherit mx-auto">
          <div className="row">
            <div className="col-md-3">
              <i className="bi bi-shield-lock fs-2 text-primary mb-2"></i>
              <h5>Discreet & Secure</h5>
              <p>We prioritize your privacy and comfort.</p>
            </div>
            <div className="col-md-3">
              <i className="bi bi-gem fs-2 text-primary mb-2"></i>
              <h5>Luxury Experience</h5>
              <p>Handpicked companions offering elite experiences.</p>
            </div>
            <div className="col-md-3">
              <i className="bi bi-person-hearts fs-2 text-primary mb-2"></i>
              <h5>Female-Focused</h5>
              <p>Services exclusively tailored for women.</p>
            </div>
            <div className="col-md-3">
              <i className="bi bi-calendar2-check fs-2 text-primary mb-2"></i>
              <h5>One Day Only</h5>
              <p>No strings, no commitments, just one perfect day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Companions */}
      <section className="py-5 text-center">
        <h2 className="mb-4">Featured Companions</h2>
        <div className="container d-flex align-items-center bg-inherit mx-auto">
          <div className="row mx-auto">
            {[1, 2, 3].map((item) => (
              <div className="col-md-4 mb-4" key={item}>
                <div className="card shadow-sm border-0 bg-inherit">
                  <img src={`/images/companion${item}.jpg`} className="card-img-top" alt="Companion" />
                  <div className="card-body ">
                    <h5 className="card-title">Sophia</h5>
                    <p className="card-text">Elegant | Art Lover | Dinner Date</p>
                    <button className="btn btn-outline-dark btn-sm">View Profile</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 text-center bg-light">
        <h2 className="mb-4">What Our Users Say</h2>
        <div className="container d-flex align-items-center bg-inherit mx-auto">
          <div className="row ">
            {[1, 2].map((t) => (
              <div className="col-md-6 mb-4" key={t}>
                <div className="p-4 bg-white shadow rounded">
                  <p>
                    “Absolutely stunning experience. I felt safe, respected, and truly special throughout the day.”
                  </p>
                  <h6 className="mt-3 mb-0">– Anonymous</h6>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* How It Works */}
      <section className="py-5 text-center">
        <h2 className="mb-4">How It Works</h2>
        <div id="htw" className="container d-flex align-items-center bg-inherit mx-auto ">
          <div className="row">
            {[
              { step: "1. Browse", desc: "Explore companions by personality & vibe." },
              { step: "2. Schedule", desc: "Choose your date, time, and place." },
              { step: "3. Meet", desc: "Enjoy your perfect one-day connection." },
              { step: "4. Repeat", desc: "Book again whenever you like." },
            ].map((item, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="mb-2 fs-1 text-muted">{item.step}</div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="containerr  text-center bg-inherit mx-auto ">
          <p className="mb-1">© 2025 OneDayCompanion. All rights reserved.</p>
          <div>
            <Link to="#" className="text-white me-3">Privacy</Link>
            <Link to="#" className="text-white me-3">Terms</Link>
            <Link to="#" className="text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
