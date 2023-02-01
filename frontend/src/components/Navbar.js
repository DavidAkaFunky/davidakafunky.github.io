import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="NavbarText">
                <Link className="NavbarText" to="/">HOME</Link>
                {" <======> "}
                <Link className="NavbarText" to="/cv">CV</Link>
                {" <======> "}
                <Link className="NavbarText" to="/projects">Projects</Link>
                {" <======> "}
                <Link className="NavbarText" to="/learning">Learning</Link>
            </div>
        </div>
    );
};

export default Navbar;