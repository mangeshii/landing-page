import "./Content.css";
import taco from "../Images/taco.jpg";
import pizza from "../Images/pizza.jpg";
import burger from "../Images/burger.jpeg";
import nachos from "../Images/nachos.jpg";
import noodles from "../Images/noodles.jpg";

const Content = () => {
    return (
        <div className="content">
            <div className="subcontainer">
                <div className="contentHeading">
                    <h1>What are you having for Lunch?</h1>
                </div>
                <div className="rightcontent">
                    <h5>
                        Lorem ipsum dolar sit amet, consectetur adipiscing elit,
                        sed to eiusmod tempor incididunt ut labore et.
                        <div
                            style={{
                                border: "1px solid red",
                                width: "40%",
                                marginTop: "15px",
                            }}
                        ></div>
                    </h5>
                </div>
            </div>
            <div className="cardcontainer">
                <div className="cards">
                    <div className="card">
                        <img src={taco} className="foodImg"></img>
                        <p>Mexican Taco</p>
                    </div>
                    <div className="card">
                        <img src={pizza} className="foodImg"></img>
                        <p>Farmhouse Pizza</p>
                    </div>
                    <div className="card">
                        <img src={burger} className="foodImg"></img>
                        <p>Chicken Burger</p>
                    </div>
                    <div className="card">
                        <img src={nachos} className="foodImg"></img>
                        <p>Loaded Nachos</p>
                    </div>
                    <div className="card">
                        <img src={noodles} className="foodImg"></img>
                        <p>Hakka Noodles</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;


