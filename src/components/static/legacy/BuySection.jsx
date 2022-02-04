import React from "react";


const BuySection = () => {
  return (

    <section className="buy" id="buy-sstx">
      <div className="buy-bg">
        <div className="buy-content">
          <h2>
            BUY <span>SSTX</span>
          </h2>
          <p>Become a SilverBack</p>
        </div>
        <div className="buy-grid pb-5">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-6 col-lg-4 m-auto p-0 pt-lg-5">
                  <iframe 
                  className="m-auto"
                  // width="400" 
                  // height="600" 
                  src="https://www.flooz.trade/embedded/0x5396734569e26101677eb39c89413f7fa7d8006f/?refId=jegOR0" 
                  title="Flooz Trade" 
                  frameBorder="0" 
                  allow="clipboard-read; clipboard-write;"> 
                  </iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="buy-btn pl-1">
          <a
            href="https://silverstonks.io/getting-started.html"
            target="_blank"
            rel="noreferrer"
            className="btn m-auto"
          >
            Need Help Buying?
          </a>
        </div>
      </div>
    </section>
  );
};

export default BuySection;
