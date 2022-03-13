import { useTranslation } from 'react-i18next';
import Arrow from '../../static/images/icon-arrow-light.svg';

const Roadmap = () => {
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'roadmap' });
  return (
    <>
      {/*<!-- Roadmap START -->*/}
      <section className="container-fluid bg-color-dark py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <div className="w-100">
                <img src={Arrow} className="mb-3" data-aos="fade-down" data-aos-delay="500" data-aos-offset="50" data-aos-duration="1000" />
                <h3
                  className="txt-color-white fw-16 td-1"
                  data-aos="fade-right"
                  data-aos-delay="500"
                  data-aos-offset="50"
                  data-aos-duration="1000"
                >
                  TIMELINE
                </h3>
                <h2
                  className="txt-color-mint fw-600"
                  data-aos="fade-left"
                  data-aos-delay="600"
                  data-aos-offset="50"
                  data-aos-duration="1000"
                >
                  Roadmap
                </h2>
                <p className="txt-color-white fs-16" data-aos="fade-up" data-aos-delay="1000" data-aos-offset="50" data-aos-duration="800">
                  Our team is working hard to reach our goals each quarter and grow our ecosystem to provide holders with increasing
                  benefits.
                </p>
              </div>
            </div>
          </div>
          <div className="row no-gutters">
            {/*<!-- Q2 - 2021-->*/}
            <div
              className="col-md-4 text-center order-1"
              data-aos="fade"
              data-aos-delay="100"
              data-aos-offset="50"
              data-aos-duration="1000"
            >
              <h3 className="txt-color-mint mb-4 td-1">Q2 2021</h3>
              <div className="road-map-card text-center solid-top mb-5">
                <div className="dot">
                  <div className="dot-solid"></div>
                </div>
                <h2 className="my-4">Concept</h2>
                <dl>
                  <dd>Assemble Team</dd>
                  <dd>White Paper Completion</dd>
                  <dd>Strategic plan</dd>
                </dl>
              </div>
            </div>
            {/*<!-- Q3 - 2021-->*/}
            <div
              className="col-md-4 text-center order-2"
              data-aos="fade"
              data-aos-delay="200"
              data-aos-offset="50"
              data-aos-duration="1000"
            >
              <h3 className="txt-color-mint mb-4 td-1">Q3 2021</h3>
              <div className="road-map-card text-center solid-top  mb-5">
                <div className="dot">
                  <div className="dot-solid"></div>
                </div>
                <h2 className="my-4">Token Launch</h2>
                <dl>
                  <dd>SSTX Launch</dd>
                  <dd>Locked Liquidity</dd>
                  <dd>Silver Design & Production</dd>
                  <dd>Business Website</dd>
                  <dd>Staking</dd>
                </dl>
              </div>
            </div>
            {/*<!-- Q4 - 2021-->*/}
            <div
              className="col-md-4 text-center order-3"
              data-aos="fade"
              data-aos-delay="400"
              data-aos-offset="50"
              data-aos-duration="1000"
            >
              <h3 className="txt-color-mint mb-4 td-1">Q4 2021</h3>
              <div className="road-map-card text-center solid-top solid-right h-100 border-tr mb-5">
                <div className="dot-solid-only"></div>
                <h2 className="my-4">Silver Market</h2>
                <dl>
                  <dd>E-Commerce</dd>
                  <dd>Marketing Campaign</dd>
                  <dd>Silver Stonks Merch Release</dd>
                </dl>
              </div>
            </div>
            {/*<!-- Q3 - 2022-->*/}
            <div
              className="col-md-4 text-center order-6 order-md-4"
              data-aos="fade"
              data-aos-delay="700"
              data-aos-offset="50"
              data-aos-duration="1000"
            >
              <h3 className="txt-color-mint mb-4 td-1">Q3 2022</h3>
              <div className="road-map-card text-center dash-top border-tl dash-left mb-5 h-100">
                <div className="dot-solid-only"></div>
                <h2 className="my-4">SSTX Expansion</h2>
                <dl>
                  <dd>Small Centralized Exchange Listing</dd>
                  <dd>Bring Silver Creation Process In-House</dd>
                  <dd>Underground Lounge Development</dd>
                  <dd>NFT Building Drop for Silverback City</dd>
                </dl>
              </div>
            </div>
            {/*<!-- Q2 - 2022-->*/}
            <div
              className="col-md-4 text-center order-5 order-md-5"
              data-aos="fade"
              data-aos-delay="600"
              data-aos-offset="50"
              data-aos-duration="1000"
            >
              <h3 className="txt-color-mint mb-4 td-1">Q2 2022</h3>
              <div className="road-map-card text-center dash-top mb-5">
                <div className="dot-solid-only"></div>
                <h2 className="my-4">Metaverse & Play2Earn Development</h2>
                <dl>
                  <dd>Token Adoption Talks with Bullion Dealers</dd>
                  <dd>Apply SilverStonks Services to Metaverse</dd>
                  <dd>Payment Processor for SSTX</dd>
                  <dd>Develop Bids Arena</dd>
                </dl>
              </div>
            </div>
            {/*<!-- Q1 2022-->*/}
            <div
              className="col-md-4 text-center order-4 order-md-6"
              data-aos="fade"
              data-aos-delay="500"
              data-aos-offset="50"
              data-aos-duration="1000"
            >
              <h2 className="txt-color-mint td-1 mb-special-1">
                Q1 2022
              </h2>
              <div className="road-map-card text-center solid-top mb-5">
                <div className="dot-solid-only"></div>
                <h3 className="my-4">Silver Stonks Expansion</h3>
                <dl>
                  <dd>Expand SilverStonks Products</dd>
                  <dd>Talks with Centralized Exchanges</dd>
                  <dd>NFT Authenticity Certificates</dd>
                  <dd>Design NFT Art Collection</dd>
                  <dd>Silverback City Concept</dd>
                </dl>
              </div>
            </div>
            {/*<!-- Q4 - 2022-->*/}
            <div
              className="col-md-4 text-center order-7 order-md-7"
              data-aos="fade"
              data-aos-delay="800"
              data-aos-offset="50"
              data-aos-duration="1000"
            >
              <h3 className="txt-color-mint mb-4 td-1">Q4 2022</h3>
              <div className="road-map-card text-center dash-top mb-5">
                <div className="dot-solid-only"></div>
                <h2 className="my-4">Exosystem Expansion</h2>
                <dl>
                  <dd>Silver Bank Run Game Development</dd>
                  <dd>Expand Financial Content</dd>
                  <dd>Grow Social Channels</dd>
                  <dd>Expand Into Jewelry</dd>
                </dl>
              </div>
            </div>
            {/*<!-- Q1 - 2023-->*/}
            <div
              className="col-md-4 text-center order-8 order-md-8"
              data-aos="fade"
              data-aos-delay="900"
              data-aos-offset="50"
              data-aos-duration="1000"
            >
              <h3 className="txt-color-mint mb-4 td-1">Q1 2023</h3>
              <div className="road-map-card text-center dash-top mb-5">
                <div className="dot-solid-only"></div>
                <h2 className="my-4">Go Mainstream</h2>
                <dl>
                  <dd>NFT Marketplace for Silverback City</dd>
                  <dd>Large Exchange Listing</dd>
                </dl>
              </div>
            </div>
            {/*<!-- Q2 - 2023-->*/}
            <div
              className="col-md-4 text-center order-9 order-md-9"
              data-aos="fade"
              data-aos-delay="1000"
              data-aos-offset="50"
              data-aos-duration="1000"
            >
              <h3 className="txt-color-mint mb-4 td-1">Q2 2023</h3>
              <div className="road-map-card text-center dash-top mb-5">
                <div className="dot-solid-only"></div>
                <h2 className="my-4">Meta Advertising Services</h2>
                <dl>
                  <dd>Improve Metaverse Services</dd>
                  <dd>Expand Marketplace</dd>
                  <dd>Meta Advertising NFT Drop</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<!-- Roadmap END -->*/}
    </>
  );
};

export default Roadmap;
