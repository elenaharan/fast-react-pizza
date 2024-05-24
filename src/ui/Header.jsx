import { Link } from "react-router-dom";
import SearchOrder from "../features/order/searchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Fast React PIzza Co.</Link>
      <SearchOrder />
      <p>Elena</p>
    </header>
  );
}

export default Header;
