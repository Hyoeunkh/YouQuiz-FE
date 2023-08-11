import { Link } from "react-router-dom";

const Header = ({ page }) => {
  return (
    <>
      <div className="subheader-container">
        <div className="subheader">
          <div className="title">{page}</div>
        </div>
      </div>
    </>
  );
};

export default Header;
