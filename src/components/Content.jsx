import "./Content.css";
import taco from "../Images/taco.jpg";
import pizza from "../Images/pizza.jpg";
import burger from "../Images/burger.jpeg";
import nachos from "../Images/nachos.jpg";
import noodles from "../Images/noodles.jpg";

const Content = () => {
    return (
        <>
            <main className="content">
                <div className="top-left-section">
                    <div className="content-header">
                        <h1>
                            What are you
                            <br /> having for Lunch?
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
                <div className="bottom-section">
                    <div class="flex-container">
                        <div className='image'>
                            <img src={taco} alt=""/>
                            <p>Mexican Taco</p>
                        </div>
                        <div className='image'>
                            <img src={pizza} alt=""/>
                            <p>Farmhouse Pizza</p>
                        </div>
                        <div className='image'>
                        <img src={burger} alt=""/>
                        <p>Chicken Burger</p>
                        </div>
                        <div className='image'>
                            <img src={nachos} alt=""/>
                            <p>Loaded Nachos</p>
                        </div>
                        <div className="flex5 image">
                            <img src={noodles} alt=""/>
                            <p>Hakka Noodles</p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Content;
