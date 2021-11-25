import { getAssets } from "app/static/Icons";

const Loader = () => {
  return (
    <div className="main-loader">
      <img src={getAssets("logo")} alt="icon" />
    </div>
  );
};

export default Loader;
