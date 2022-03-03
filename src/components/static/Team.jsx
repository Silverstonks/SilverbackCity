import Vicente from '../../static/images/team/vicente.jpg'
import Teresa from '../../static/images/team/teresa.jpg'
import Jose from '../../static/images/team/Jose.jpg';
import JoseDeJesus from '../../static/images/team/jose-dejesus.jpg';
import David from '../../static/images/team/david.jpg';
import Pablo from '../../static/images/team/pablo.jpg';
import Christopher from '../../static/images/team/christopher.jpg';
import Ignacio from '../../static/images/team/ignacio.jpg';

const Team = () => {
  return (
    <>
      <section className="container-fluid py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h2 className="txt-color-mint fw-600" data-aos="fade-up" data-aos-delay="300" data-aos-offset="50" data-aos-duration="500">
                Our Team
              </h2>
              <p className="fs-16 mb-5" data-aos="fade" data-aos-delay="100" data-aos-offset="50" data-aos-duration="1000">
                The Silver Stonks team combines a passion for creating impactful businesses with industry expertise in finance, development
                & marketing.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            {/*<!-- Team 1-->*/}
            <div className="col-md-3 mb-4">
              <div className="team d-flex flex-column align-items-center">
                <div className="mb-3" data-aos="flip-left" data-aos-delay="100" data-aos-offset="50" data-aos-duration="1000">
                  <div className="image-box">
                    <img src={Vicente} />
                  </div>
                </div>
                <div
                  className="text-center team-info"
                  data-aos="fade-zoom-in"
                  data-aos-delay="100"
                  data-aos-offset="50"
                  data-aos-duration="1000"
                >
                  <h3 className="card-title">Vicente Benlloch</h3>
                  <h2 className="card-subtitle mb-2 text-muted">Co-founder, Chief Executive Officer</h2>
                  <a href="https://www.linkedin.com/in/vicentebenlloch/" target="_blank" className="" >
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            {/*<!-- Team 2-->*/}
            <div className="col-md-3 mb-4">
              <div className="team d-flex flex-column align-items-center">
                <div className="mb-3" data-aos="flip-left" data-aos-delay="300" data-aos-offset="50" data-aos-duration="1000">
                  <div className="image-box">
                    <img src={Teresa} />
                  </div>
                </div>
                <div
                  className="text-center team-info"
                  data-aos="fade-zoom-in"
                  data-aos-delay="100"
                  data-aos-offset="50"
                  data-aos-duration="1000"
                >
                  <h3 className="card-title">Teresa De Jesus</h3>
                  <h2 className="card-subtitle mb-2 text-muted">Co-founder, Chief Financial Officer</h2>
                  <a href="https://www.linkedin.com/in/teresadejesus/" target="_blank" className="">
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            {/*<!-- Team 3-->*/}
            <div className="col-md-3 mb-4">
              <div className="team d-flex flex-column align-items-center">
                <div className="mb-3" data-aos="flip-left" data-aos-delay="300" data-aos-offset="50" data-aos-duration="1000">
                  <div className="image-box">
                    <img src={Jose} />
                  </div>
                </div>
                <div
                  className="text-center team-info"
                  data-aos="fade-zoom-in"
                  data-aos-delay="100"
                  data-aos-offset="50"
                  data-aos-duration="1000"
                >
                  <h3 className="card-title">Jose Honrubia</h3>
                  <h2 className="card-subtitle mb-2 text-muted">Chief Operating Officer</h2>
                  <a href="https://www.linkedin.com/in/jose-manuel-honrubia-belenguer-8338a9104/" target="_blank" className="">
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            {/*<!-- Team 4-->*/}
            <div className="col-md-3 mb-4">
              <div className="team d-flex flex-column align-items-center">
                <div className="mb-3" data-aos="flip-left" data-aos-delay="300" data-aos-offset="50" data-aos-duration="1000">
                  <div className="image-box">
                    <img src={JoseDeJesus} />
                  </div>
                </div>
                <div
                  className="text-center team-info"
                  data-aos="fade-zoom-in"
                  data-aos-delay="100"
                  data-aos-offset="50"
                  data-aos-duration="1000"
                >
                  <h3 className="card-title">Jose De Jesus</h3>
                  <h2 className="card-subtitle mb-2 text-muted">Chief Technology Officer</h2>
                  <a href="https://www.linkedin.com/in/jdejesus-ibm/" target="_blank" className="">
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            {/*<!-- Team 5-->*/}
            <div className="col-md-3 mb-4">
              <div className="team d-flex flex-column align-items-center">
                <div className="mb-3" data-aos="flip-left" data-aos-delay="300" data-aos-offset="50" data-aos-duration="1000">
                  <div className="image-box">
                    <img src={David} />
                  </div>
                </div>
                <div
                  className="text-center team-info"
                  data-aos="fade-zoom-in"
                  data-aos-delay="100"
                  data-aos-offset="50"
                  data-aos-duration="1000"
                >
                  <h3 className="card-title">David Miguel</h3>
                  <h2 className="card-subtitle mb-2 text-muted">Director of Silver Production, Europe</h2>
                  <a href="https://www.linkedin.com/in/david-miquel-castells-855424123/" target="_blank" className="">
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            {/*<!-- Team 6-->*/}
            <div className="col-md-3 mb-4">
              <div className="team d-flex flex-column align-items-center">
                <div className="mb-3" data-aos="flip-left" data-aos-delay="300" data-aos-offset="50" data-aos-duration="1000">
                  <div className="image-box">
                    <img src={Pablo} />
                  </div>
                </div>
                <div
                  className="text-center team-info"
                  data-aos="fade-zoom-in"
                  data-aos-delay="100"
                  data-aos-offset="50"
                  data-aos-duration="1000"
                >
                  <h3 className="card-title">Pablo Palau</h3>
                  <h2 className="card-subtitle mb-2 text-muted">Creative Director</h2>
                  <a href="https://www.linkedin.com/in/pablo-palau-garcer%C3%A1-81ba0292/" target="_blank" className="">
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>

            {/*<!-- Team 8-->*/}
            <div className="col-md-3 mb-4">
              <div className="team d-flex flex-column align-items-center">
                <div className="mb-3" data-aos="flip-left" data-aos-delay="300" data-aos-offset="50" data-aos-duration="1000">
                  <div className="image-box">
                    <img src={Christopher} />
                  </div>
                </div>
                <div
                  className="text-center team-info"
                  data-aos="fade-zoom-in"
                  data-aos-delay="100"
                  data-aos-offset="50"
                  data-aos-duration="1000"
                >
                  <h3 className="card-title">Christopher Navarro</h3>
                  <h2 className="card-subtitle mb-2 text-muted">Director of Silver Production, US</h2>
                  <a href="https://www.linkedin.com/in/chris-navarro-00081670/" target="_blank" className="">
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
            {/*<!-- Team 9-->*/}
            <div className="col-md-3 mb-4">
              <div className="team d-flex flex-column align-items-center">
                <div className="mb-3" data-aos="flip-left" data-aos-delay="300" data-aos-offset="50" data-aos-duration="1000">
                  <div className="image-box">
                    <img src={Ignacio} />
                  </div>
                </div>
                <div
                  className="text-center team-info"
                  data-aos="fade-zoom-in"
                  data-aos-delay="100"
                  data-aos-offset="50"
                  data-aos-duration="1000"
                >
                  <h3 className="card-title">Ignacio Olmos</h3>
                  <h2 className="card-subtitle mb-2 text-muted">Attorney, Legal Counsel</h2>
                  <a href="https://www.linkedin.com/in/iolmosclemades/" target="_blank" className="">
                    <i className="fab fa-linkedin fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
