import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="Navbar Footer">
            <div className="NavbarText">
                Built with love by <Link to="https://github.com/DavidAkaFunky" className="NavbarText" target="_blank">me!</Link>
                {" <======> 2002 + 21 <======> "}
                <Link className="NavbarText" to="https://github.com/DavidAkaFunky/davidakafunky.github.io">Source code</Link>
                {" <======> UwU"}
            </div>
        </div>
    );
};

export default Footer;