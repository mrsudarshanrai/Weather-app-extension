import { getAssets } from "app/utils/Icons";

const Loader = () => {
  return (
    <div className="loader">
      <img src={getAssets("logo")} alt="icon" />
    </div>
  );
};

export default Loader;
