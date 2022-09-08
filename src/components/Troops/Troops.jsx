import { useTranslation } from "react-i18next";
import powers from "../../static/images/Powers.png";
import "./troops.scss";

export const Troops = () => {
  const { t } = useTranslation("translation", { keyPrefix: "troops" });
  return (
    <div className="troops">
      <div className="troops-images">
        <img src={powers} alt="powers" />
      </div>
      <div className="troops-text">
        <h2 className="title">{t("title")}</h2>
        <h4 className="text">{t("text")}</h4>
      </div>
    </div>
  );
};

export default Troops;
