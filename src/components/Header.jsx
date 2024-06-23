import { Link } from "react-router-dom";
import FilterByTopic from "./FilterByTopic";

function Header() {
    return <header>
        <Link className="websiteName" to="/">
            <h1>NC News</h1>
        </Link>
        <FilterByTopic />
    </header>
}

export default Header;