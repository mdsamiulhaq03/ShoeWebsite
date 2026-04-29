import "./Styles/Header.css";
import logo from "../assets/images/NikeLogo.png";

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={logo} alt="Nike logo" className="logo-img" />
      <nav className="items">
        <a href="">MENU</a>
        <a href="">LOCATION</a>
        <a href="">ABOUT</a>
        <a href="">CONTACT</a>
      </nav>

      <button className="login-btn">Login</button>
    </header>
  );
};

export default Header;
