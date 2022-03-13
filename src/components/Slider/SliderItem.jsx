import { useTranslation } from 'react-i18next';

export const SliderItem = ({ navPill, callBackSetIndex }) => {
  const { index, title, description, active } = navPill;
  const { t, i18n } = useTranslation('translation', { keyPrefix: 'slider' });
  return (
    <div className={`col-md col-12 nav-pill d-lg-block ${active ? 'active' : 'd-none'} `} onClick={() => callBackSetIndex(index)}>
      <div className="nav-pill-title-container d-flex justify-content-center align-items-baseline ">
        <div className="button-container mb-5">
          <button className="btn btn-light nav-pill-index p-0">{index}</button>
        </div>

        <span className="nav-pill-title">{t('SLIDE_' + index + '.title')}</span>
      </div>

      <div className="nav-pill-content">{t('SLIDE_' + index + '.description')}</div>
    </div>
  );
};
