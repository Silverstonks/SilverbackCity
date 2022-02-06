export const SliderItem = ({ navPill, callBackSetIndex }) => {
  const { index, title, description, active } = navPill;

  return (
    <div className={`col-md col-12 nav-pill ${active ? 'active' : ''} `} key={`title-${index}`} onClick={() => callBackSetIndex(index)}>
      <div className="nav-pill-title-container">
        <div className="button-container">
          <button className="btn btn-light nav-pill-index">{index}</button>
        </div>

        <span className="nav-pill-title">{title}</span>
      </div>

      <div className="nav-pill-content">{description}</div>
    </div>
  );
};
