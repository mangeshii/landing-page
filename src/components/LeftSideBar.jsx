import "./LeftSIdeBar.css";

const LeftSideBar = () => {
    return (
        <>
            <div className="leftSideBarWrapper">
                <div className="header">
                    <h3>Lorem Ipsum</h3>
                </div>
                <div className="unorderedList">
                    <ul>
                        <li className="list1">About</li>
                        <li>Services</li>
                        <li>Cuisine</li>
                        <li>Gallery</li>
                        <li>Contact</li>
                        <li>Book</li>
                    </ul>
                </div>
                <div className="cartButton">
                    <button>Cart</button>
                </div>
            </div>
        </>
    );
};
export default LeftSideBar;
