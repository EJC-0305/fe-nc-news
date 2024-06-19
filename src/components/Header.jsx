import { Link } from "react-router-dom";
import FilterByTopic from "./FilterByTopic";

function Header() {
    return <header>
        <Link to="/">
            <h1>NC News</h1>
        </Link>
        <FilterByTopic />
    </header>
}

export default Header;