import daraz from "../assets/images/daraz.png";
import amazon from "../assets/images/amazon.png";
import shoe from "../assets/images/Shoe.webp";
import "./Styles/Main.css";

function Main() {
  return (
    <div className="main-container">
      <div className="left-side">
        <h1 className="main-title">YOUR FEET DESERVE THE BEST</h1>

        <p className="main-description">
          YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH THAT. YOUR
          FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH THAT.
        </p>

        <div className="button-group">
          <button className="shop-btn">Shop Now</button>
          <button className="category-btn">Category</button>
        </div>

        <h6 className="available-text">Also Available On</h6>

        <div className="logos">
          <img src={daraz} alt="daraz-logo" className="logo daraz-logo" />
          <img src={amazon} alt="amazon-logo" className="logo amazon-logo" />
        </div>
      </div>

      <div className="right-side">
        <img src={shoe} alt="shoe" className="shoe-image" />
      </div>
    </div>
  );
}

export default Main;
