import React from 'react';
import cubo from '../../static/images/cubo.png';
import nft01 from '../../static/images/nft01.png';
import nft02 from '../../static/images/nft02.png';
import nft03 from '../../static/images/nft03.png';

const Nft = () => {
  return (
    <section className="nft">
      <div className="nft-bg">
        <div className="container">
          <div className="nft-header">
            <div className="row my-5">
              <div className="col-6 nft-title">
                <div className="row">
                  <div className="col-md-12 d-flex justify-content-end align-items-end">
                    <h2 className="m-0 text-white ">Introducing Silver</h2>
                  </div>
                  <div className="col-md-12 d-flex justify-content-end align-items-start">
                    <h2 className="p-0 text-white">Stonks Collectibles</h2>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="edge-round-bg d-none  d-flex align-items-baseline justify-content-center" id="learnMore">
                  <img
                    className="nft-cubo "
                    src={cubo}
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
      <div className="container">
        <div className="nft-content">
          <div className="row">
            <div className="col-10 offset-1">
              <iframe
                width="200"
                height="100"
                src="https://www.youtube.com/embed/nhKstO0ofkc"
                title="Nft Certificate"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="row">
            <div className="col-12 my-3">
              <h2>NFTs 101</h2>
              <p>Learn about NFT’s and how owning Silver Stonks Collectibles will earn you more rewards in our growing ecosystem.</p>
            </div>
            <div className="col-12 my-5">
              <div className="row">
                <div className="col-lg-4 mb-3">
                  <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                      <img
                        className="nft-icon"
                        src={nft01}
                        data-aos="fade-down"
                        data-aos-delay="200"
                        data-aos-offset="50"
                        data-aos-duration="1000"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-easing="ease-out-back"
                      />
                    </div>
                    <div className="col-12 d-flex justify-content-center mt-2 mb-3 text-center">
                      <h3>How Do NFTs Work?</h3>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                      <p className="align-items-center d-flex">
                        <a href="/">
                          Read more <span className="link-arrow mx-3">&gt;</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-3">
                  <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                      <img
                        className="nft-icon"
                        src={nft02}
                        data-aos="fade-down"
                        data-aos-delay="200"
                        data-aos-offset="50"
                        data-aos-duration="1000"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-easing="ease-out-back"
                      />
                    </div>
                    <div className="col-12 d-flex justify-content-center text-center mt-2 mb-3">
                      <h3>How Do I Earn Interest On My Silver NFTs?</h3>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                      <p className="align-items-center d-flex">
                        <a href="/">
                          Read more <span className="link-arrow mx-3">&gt;</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-3">
                  <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                      <img
                        className="nft-icon"
                        src={nft03}
                        data-aos="fade-down"
                        data-aos-delay="200"
                        data-aos-offset="50"
                        data-aos-duration="1000"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-easing="ease-out-back"
                      />
                    </div>
                    <div className="col-12 d-flex justify-content-cente text-center mt-2 mb-3">
                      <h3>How Do I Set Up Metamask for My NFTs?</h3>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                      <p className="align-items-center d-flex">
                        <a href="https://medium.com/@silverstonks/how-to-set-up-metamask-a43620136f58" rel="noreferrer" target="_blank">
                          Read more <span className="link-arrow mx-3">&gt;</span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nft;
