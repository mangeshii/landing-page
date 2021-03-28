import "./LeftSIdeBar.css";


const LeftSideBar = () => {
    return (
        <>
            <section className="wrapper">
                <div className="sidemenu">
                    <i class="fas fa-bars col-3"></i>
                    <div className="header">
                        <h1>
                            Lorem <span>Ipsum</span>
                        </h1>
                    </div>
                    <div className="navlist">
                        <ul>
                            <li>About</li>
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
                </div>
            </section>
        </>
    );
};
export default LeftSideBar;
