import { Link } from "react-router-dom";
import SearchOrder from "../features/order/searchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="bg-yellow-500 uppercase px-4 py-4 border-b border-stone-200 sm:px-6">
      <Link to="/" className="tracking-widest">Fast React PIzza Co.</Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
