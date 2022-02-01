import React from 'react';
import { useSelector } from 'react-redux';

const ProductInfo = () => {
  const { nft } = useSelector((state) => state.nft);

  return (
    <section className="tab product-info">
      <div className="container mb-3">
        <div className="row">
          <div className="col-lg-6 col-xl-4 col-12 p-1 product-info-data d-flex justify-content-between">
            <span className="label px-3"> Name of item: </span>
            <span className="data px-3">{nft.itemName}</span>
          </div>
          <div className="col-lg-6 col-xl-4 col-12 p-1 product-info-data d-flex justify-content-between">
            <span className="label px-3"> Weight (Grams): </span>
            <span className="data px-3">{nft.weightInGrams}</span>
          </div>
          <div className="col-lg-6 col-xl-4 col-12 p-1 product-info-data d-flex justify-content-between">
            <span className="label px-3"> Production: </span>
            <span className="data px-3">{nft.productionOrigin}</span>
          </div>

          <div className="col-lg-6 col-xl-4 col-12 p-1 product-info-data d-flex justify-content-between">
            <span className="label px-3"> Product Sku: </span>
            <span className="data px-3">{nft.sku}</span>
          </div>
          <div className="col-lg-6 col-xl-4 col-12 p-1 product-info-data d-flex justify-content-between">
            <span className="label px-3"> Material: </span>
            <span className="data px-3">{nft.material}</span>
          </div>
          <div className="col-lg-6 col-xl-4 col-12 p-1 product-info-data d-flex justify-content-between">
            <span className="label px-3"> Design: </span>
            <span className="data px-3">{nft.design}</span>
          </div>

          <div className="col-lg-6 col-xl-4 col-12 p-1 product-info-data d-flex justify-content-between">
            <span className="label px-3"> Purity: </span>
            <span className="data px-3">{nft.purity}</span>
          </div>
          <div className="col-lg-6 col-xl-4 col-12 p-1 product-info-data d-flex justify-content-between">
            <span className="label px-3"> Dimension: </span>
            <span className="data px-3">{nft.dimensions}</span>
          </div>
          <div className="col-lg-6 col-xl-4 col-12 p-1 product-info-data d-flex justify-content-between">
            <span className="label px-3"> Points: </span>
            <span className="data px-3">{nft.points}</span>
          </div>
          <div className="col-lg-6 d-none d-lg-flex d-lg-xl p-1 product-info-data  justify-content-between">
          
          </div>
          <div className="col-12 p-1 product-info-data d-flex justify-content-center">
            <span className="label px-3"> Desciption: </span>
            <span className="data px-3 text-justify">{nft.description}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
