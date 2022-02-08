export const SliderItem = ({ navPill, callBackSetIndex }) => {
  const { index, title, description, active } = navPill;
  return (
    <div className={`col-md col-12 nav-pill ${active ? 'active' : ''} `} onClick={() => callBackSetIndex(index)}>
      <div className="nav-pill-title-container d-flex justify-content-center align-items-baseline ">
        <div className="button-container mb-5">
          <button className="btn btn-light nav-pill-index p-0">{index}</button>
        </div>

        <span className="nav-pill-title">{title}</span>
      </div>

      <div className="nav-pill-content">{description}</div>
    </div>
  );
};
