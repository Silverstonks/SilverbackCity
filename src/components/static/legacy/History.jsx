import React from 'react';
import monkey from '../../static/images/monkey-edge.svg';

const History = () => {
  return (
    <section className="history">
      <div className="history-bg">
        <div className="container">
          <div className="history-content mb-5">
            <div className="row ">
            <div className="col-lg-6 d-block d-lg-none">
                <div className="edge-round-bg d-none  d-flex align-items-baseline justify-content-center" id="learnMore">
                  <img
                    className="history-monkey "
                    src={monkey}
                    data-aos="fade-down"
                    data-aos-delay="200"
                    data-aos-offset="50"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-easing="ease-out-back"
                  />
                </div>
                <div className="d-flex align-items-baseline justify-content-center">
                  <h2 className="fs-16 fw-700 txt-color-mint text-uppercase mb-3"> Foto de producto </h2>
                </div>
              </div>
              <div className="col-lg-6 my-5">
                <div className="row">
                  <div className="col-md-12">
                    <h2>Our Story</h2>
                    <p>
                      Silver Stonks was founded in an effort to create awareness for a younger demographic to start diversifying their
                      assets as a way to protect themselves and build wealth. The Silver Stonks ecosystem is powered by our native token,
                      SSTX, and makes it easy for investors to diversify into digital and hard assets.
                    </p>
                    <p>
                      We are specifically focused on silver, because of its utility and price accessibility. The silver market is greatly
                      undervalued, making owning silver a great hedge against inflation and long-term investment. We are combining both hard
                      and digital assets through our token and NFT collections. Silver Stonks is leading the way to encourage the average
                      investor to protect and diversify their portfolio.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <div className="edge-round-bg d-none d-flex align-items-baseline justify-content-center" id="learnMore">
                  <img
                    className="history-monkey "
                    src={monkey}
                    data-aos="fade-down"
                    data-aos-delay="200"
                    data-aos-offset="50"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-easing="ease-out-back"
                  />
                </div>
                <div className="d-flex align-items-baseline justify-content-center">
                  <h2 className="fs-16 fw-700 txt-color-mint text-uppercase mb-3"> Foto de producto </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
