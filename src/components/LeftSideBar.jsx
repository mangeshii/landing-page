import "./LeftSIdeBar.css";
import Content from "../components/Content";

const LeftSideBar = () => {
    return (
        <>
            <div className="wrapper">
                <div className="main">
                    <header className="header">
                        <i class="fas fa-bars col-3"></i>
                        <div className="main-heading">
                            <h1>
                                Lorem <span>Ipsum</span>
                            </h1>
                        </div>
                        <div className="links">
                            <ul>
                                <li className="list1">About</li>
                                <li>Services</li>
                                <li>Cuisine</li>
                                <li>Gallery</li>
                                <li>Contact</li>
                                <li>Book</li>
                            </ul>
                        </div>
                        <i class="fas fa-shopping-cart col-3"></i>
                        <div className="cartbutton">
                            <button>Cart</button>
                        </div>
                    </header>
                    <Content />
                </div>
            </div>
        </>
    );
};
export default LeftSideBar;
