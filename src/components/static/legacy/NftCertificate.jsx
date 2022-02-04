import React from 'react';
import tarjeta from '../../static/images/certificate00.png';
import certificate01 from '../../static/images/certificate01.png';
import certificate02 from '../../static/images/certificate02.png';
import certificate03 from '../../static/images/certificate03.png';
import arrowRight from '../../static/images/icon-arrow-right.svg';

const NftCertificate = () => {
  return (
    <section className="certificate">
      <div className="certificate-bg">
        <div className="container">
          <div className="certificate-header">
            <div className="row my-5">
              <div className="col-lg-6 col-12">
                <div className="edge-round-bg d-none  d-flex align-items-baseline justify-content-end" id="learnMore">
                  <img
                    className="certificate-tarjeta"
                    src={tarjeta}
                    data-aos="fade-down"
                    data-aos-delay="200"
                    data-aos-offset="50"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-easing="ease-out-back"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-12 certificate-title">
                <div className="row">
                  <div className="col-md-12 d-flex justify-content-start align-items-end">
                    <h2 className="m-0 text-white ">Why Silver Stonks</h2>
                  </div>
                  <div className="col-md-12 d-flex justify-content-start align-items-start">
                    <h2 className="p-0 text-white">Certificates?</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="certificate-content">
          <div className="row">
            <div className="col-12 my-5">
              <div className="row">
                <div className="col-lg-6 col-12 d-flex align-items-center">
                  <div className="row">
                    <div className="col-12 mb-3">
                      <h3 className="d-flex">
                        <img
                          className="arrow-left mx-3"
                          src={arrowRight}
                          data-aos="fade-down"
                          data-aos-delay="200"
                          data-aos-offset="50"
                          data-aos-duration="1000"
                          data-aos-anchor-placement="top-bottom"
                          data-aos-easing="ease-out-back"
                        />
                        Certified Authenticity
                      </h3>
                    </div>
                    <div className="col-12">
                      <p>
                        Each silver product made by Silver Stonks comes with an NFT certififcate of authenticity, verifiable on the Binance
                        Smart Chain blockchain. Customers can claim their NFT once the product arrives.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12 d-flex justify-content-center mb-5">
                  <img
                    className="certificate-img01"
                    src={certificate01}
                    data-aos="fade-down"
                    data-aos-delay="200"
                    data-aos-offset="50"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-easing="ease-out-back"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-12 d-lg-flex justify-content-center d-none ">
                  <img
                    className="certificate-img02"
                    src={certificate02}
                    data-aos="fade-down"
                    data-aos-delay="200"
                    data-aos-offset="50"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-easing="ease-out-back"
                  />
                </div>
                <div className="col-lg-6 col-12 d-flex align-items-center">
                  <div className="row">
                    <div className="col-12 mb-3">
                      <h3 className="d-flex">
                        <img
                          className="arrow-left mx-3"
                          src={arrowRight}
                          data-aos="fade-down"
                          data-aos-delay="200"
                          data-aos-offset="50"
                          data-aos-duration="1000"
                          data-aos-anchor-placement="top-bottom"
                          data-aos-easing="ease-out-back"
                        />
                        Diversify Your Assets
                      </h3>
                    </div>
                    <div className="col-12">
                      <p>
                        Silver Stonks is on a mission to make diversifying into digital and hard assets more accessible to a wider
                        demographic. By claiminng your NFT, you can store the certificate of Authenticity in your digital wallet, which you
                        can keep to accumulate rewards.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12 d-flex justify-content-center d-lg-none mb-5">
                  <img
                    className="certificate-img02"
                    src={certificate02}
                    data-aos="fade-down"
                    data-aos-delay="200"
                    data-aos-offset="50"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-easing="ease-out-back"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-12 d-flex align-items-center">
                  <div className="row">
                    <div className="col-12 mb-3">
                      <h3 className="d-flex">
                        <img
                          className="arrow-left mx-3"
                          src={arrowRight}
                          data-aos="fade-down"
                          data-aos-delay="200"
                          data-aos-offset="50"
                          data-aos-duration="1000"
                          data-aos-anchor-placement="top-bottom"
                          data-aos-easing="ease-out-back"
                        />
                        Earn More Rewards
                      </h3>
                    </div>
                    <div className="col-12">
                      <p>
                        Each silver product made by Silver Stonks comes with an NFT certififcate of authenticity, verifiable on the Binance
                        Smart Chain blockchain. Customers can claim their NFT once the product arrives.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12 d-flex justify-content-center mb-5">
                  <img
                    className="certificate-img03"
                    src={certificate03}
                    data-aos="fade-down"
                    data-aos-delay="200"
                    data-aos-offset="50"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-easing="ease-out-back"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NftCertificate;
