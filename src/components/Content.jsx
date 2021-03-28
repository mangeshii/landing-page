import "./Content.css";
// import taco from "../Images/taco.jpg";
// import pizza from "../Images/pizza.jpg";
// import burger from "../Images/burger.jpeg";
// import nachos from "../Images/nachos.jpg";
// import noodles from "../Images/noodles.jpg";

const Content = () => {
    return (
        <>
            <section className="content-wrapper">
                <div className="top-left-section">
                    <div className="header-content">
                        <h1>
                            What are you <br />
                            having for Lunch?
                        </h1>
                    </div>
                </div>
                <div className="top-right-section">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nostrum, in voluptatibus. Saepe autem soluta laboriosam
                        modi.
                    </p>
                    <div className="bottomline"></div>
                </div>
                <div className="bottom-section"></div>
            </section>
        </>
    );
};

export default Content;
