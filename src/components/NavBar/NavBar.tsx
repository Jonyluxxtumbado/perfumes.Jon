import ImageFrame from "../ImageFrame/ImageFrame";
import { Menu } from "./components/Menu/Menu";
import { NavUtils } from "./components/NavUtils/NavUtils";

import './NavBar.styles.scss';

const NavBar = () => {
    return <div className="nav-bar">
        <a href="/">
            <ImageFrame 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGskoNoLdFtrUiw-gvUvQ3tsDYBTBsn8fqkA&s"
                alt="logo-Louis Vuitton"
                width="60"
            />
        </a>
        <Menu />
        <NavUtils />
    </div>
}

export default NavBar;
