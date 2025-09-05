import React from "react";
import myimage from "./happycouple.jpg"
const about = () => {
  const heroStyle = {
    background: "linear-gradient(120deg, #f7d9e3, #fff)",
    padding: "60px 0",
    textAlign: "center",
  };

  const roundedImg = {
    borderRadius: "20px",
  };

  return (
    <div className=" w-100 w-lg-75 mx-auto">
      {/* Hero Section */}
      <section style={heroStyle}>
        <div className="container custom-large-width ">
          <h1 className="display-4 fw-bold text-danger">About Us</h1>
          <p className="lead mt-4">
            Where friendships & fun meet comfort — for just a day, or maybe
            more.
          </p>
        </div>
      </section>

      {/* What is Section */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src={myimage}
                alt="Happy couple"
                className="img-fluid shadow"
                style={roundedImg}
              />
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <h2 className="fw-bold mb-3">What is OneDayCompanion?</h2>
              <p>
                OneDayCompanion is a unique platform where women can connect
                with handpicked, respectful, and friendly guys to share fun
                moments, go on a casual date, or simply enjoy companionship for
                a day.
              </p>
              <p>
                Whether you're looking for a pretend boyfriend for a social
                event, a genuine conversation, or a chill hangout — we’ve got
                you covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Started Section */}
      <section className="bg-light py-5">
          <h2 className="fw-bold mb-4 text-center">Why We Started</h2>
        <div className="container d-flex align-items-center">
          <p className="mx-auto" style={{ maxWidth: "700px" }}>
            In a world full of swipes and ghosting, we wanted to create a
            platform that’s simple, safe, and honest. We believe women deserve
            to choose how they spend their time — whether for laughter,
            confidence boost, or just some harmless fun.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-5">
          <h2 className="fw-bold mb-4 text-center">Our Core Values</h2>
        <div className="container d-flex align-items-center ">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <h5 className="text-danger">Safety First</h5>
              <p>
                We screen all our companions carefully to ensure a secure and
                respectful experience.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h5 className="text-danger">Freedom of Choice</h5>
              <p>
                You choose what kind of experience you want — casual, classy, or
                just friendly vibes.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h5 className="text-danger">No Judgement</h5>
              <p>
                We believe everyone deserves companionship without awkward
                questions or social labels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} OneDayCompanion. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default about;
