import { useTranslation } from 'react-i18next';
import Arrow from '../../static/images/icon-arrow-light.svg';

const Roadmap = () => {
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'roadmap' });
  return (
    <>
      {/*<!-- Roadmap START -->*/}
      <section className="container-fluid bg-color-dark py-5 roadmap">
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
                  {t('pre_title')}
                </h3>
                <h2
                  className="txt-color-mint fw-600"
                  data-aos="fade-left"
                  data-aos-delay="600"
                  data-aos-offset="50"
                  data-aos-duration="1000"
                >
                  {t('subtitle')}
                </h2>
                <p className="txt-color-white fs-16" data-aos="fade-up" data-aos-delay="1000" data-aos-offset="50" data-aos-duration="800">
                  {t('description')}
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
              <h3 className="txt-color-mint mb-4 td-1">{t('Quarter.Q221.quarter')}</h3>
              <div className="road-map-card text-center solid-top mb-5">
                <div className="dot">
                  <div className="dot-solid"></div>
                </div>
                <h2 className="my-4">{t('Quarter.Q221.title')}</h2>
                <dl>
                  <dd>{t('Quarter.Q221.des1')}</dd>
                  <dd>{t('Quarter.Q221.des2')}</dd>
                  <dd>{t('Quarter.Q221.des3')}</dd>
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
              <h3 className="txt-color-mint mb-4 td-1">{t('Quarter.Q321.quarter')}</h3>
              <div className="road-map-card text-center solid-top  mb-5">
                <div className="dot">
                  <div className="dot-solid"></div>
                </div>
                <h2 className="my-4">{t('Quarter.Q321.title')}</h2>
                <dl>
                  <dd>{t('Quarter.Q321.des1')}</dd>
                  <dd>{t('Quarter.Q321.des2')}</dd>
                  <dd>{t('Quarter.Q321.des3')}</dd>
                  <dd>{t('Quarter.Q321.des4')}</dd>
                  <dd>{t('Quarter.Q321.des5')}</dd>
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
              <h3 className="txt-color-mint mb-4 td-1">{t('Quarter.Q421.quarter')}</h3>
              <div className="road-map-card text-center solid-top solid-right h-100 border-tr mb-5">
                <div className="dot-solid-only"></div>
                <h2 className="my-4">{t('Quarter.Q421.title')}</h2>
                <dl>
                  <dd>{t('Quarter.Q421.des1')}</dd>
                  <dd>{t('Quarter.Q421.des2')}</dd>
                  <dd>{t('Quarter.Q421.des3')}</dd>
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
              <h3 className="txt-color-mint mb-4 td-1">{t('Quarter.Q322.quarter')}</h3>
              <div className="road-map-card text-center dash-top border-tl dash-left mb-5 h-100">
                <div className="dot-solid-only"></div>
                <h2 className="my-4">{t('Quarter.Q322.title')}</h2>
                <dl>
                  <dd>{t('Quarter.Q322.des1')}</dd>
                  <dd>{t('Quarter.Q322.des2')}</dd>
                  <dd>{t('Quarter.Q322.des3')}</dd>
                  <dd>{t('Quarter.Q322.des4')}</dd>
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
              <h3 className="txt-color-mint mb-4 td-1">{t('Quarter.Q222.quarter')}</h3>
              <div className="road-map-card text-center dash-top mb-5">
                <div className="dot-solid-only"></div>
                <h2 className="my-4">{t('Quarter.Q222.title')}</h2>
                <dl>
                  <dd>{t('Quarter.Q222.des1')}</dd>
                  <dd>{t('Quarter.Q222.des2')}</dd>
                  <dd>{t('Quarter.Q222.des3')}</dd>
                  <dd>{t('Quarter.Q222.des4')}</dd>
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
              {t('Quarter.Q122.quarter')}
              </h2>
              <div className="road-map-card text-center solid-top mb-5">
                <div className="dot-solid-only"></div>
                <h3 className="my-4">{t('Quarter.Q122.title')}</h3>
                <dl>
                  <dd>{t('Quarter.Q122.des1')}</dd>
                  <dd>{t('Quarter.Q122.des2')}</dd>
                  <dd>{t('Quarter.Q122.des3')}</dd>
                  <dd>{t('Quarter.Q122.des4')}</dd>
                  <dd>{t('Quarter.Q122.des5')}</dd>
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
              <h3 className="txt-color-mint mb-4 td-1">{t('Quarter.Q422.quarter')}</h3>
              <div className="road-map-card text-center dash-top mb-5">
                <div className="dot-solid-only"></div>
                <h2 className="my-4">{t('Quarter.Q422.title')}</h2>
                <dl>
                  <dd>{t('Quarter.Q422.des1')}</dd>
                  <dd>{t('Quarter.Q422.des2')}</dd>
                  <dd>{t('Quarter.Q422.des3')}</dd>
                  <dd>{t('Quarter.Q422.des4')}</dd>
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
              <h3 className="txt-color-mint mb-4 td-1">{t('Quarter.Q123.quarter')}</h3>
              <div className="road-map-card text-center dash-top mb-5">
                <div className="dot-solid-only"></div>
                <h2 className="my-4">{t('Quarter.Q123.title')}</h2>
                <dl>
                  <dd>{t('Quarter.Q123.des1')}</dd>
                  <dd>{t('Quarter.Q123.des2')}</dd>
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
              <h3 className="txt-color-mint mb-4 td-1">{t('Quarter.Q223.quarter')}</h3>
              <div className="road-map-card text-center dash-top mb-5">
                <div className="dot-solid-only"></div>
                <h2 className="my-4">{t('Quarter.Q223.title')}</h2>
                <dl>
                  <dd>{t('Quarter.Q223.des1')}</dd>
                  <dd>{t('Quarter.Q223.des2')}</dd>
                  <dd>{t('Quarter.Q223.des3')}</dd>
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
