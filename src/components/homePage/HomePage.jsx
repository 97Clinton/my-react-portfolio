import "./homePage.scss";
import { motion } from "framer-motion";

function HomePage() {
    return (
        <section id="homePage">
            <div className="container">
                <div className="left">
                    <h1 className="header-h1">Front-End React Developer <img src="./wave.png" alt="" /></h1>
                    <p className="header-h1">Hi! I am Clinton. A skilled Front-End React developer with Team-work experience.</p>
                    <div className="link header-h1">
                        <a href="https://github.com/97Clinton"><img src="./github.svg" alt="" /></a>
                        <a href="https://www.linkedin.com/in/clinton-atayero-3800b5238/"><img src="./linkedin.svg" alt="" /></a>
                    </div>
                </div>
                <motion.div className="right"
                    drag
                    dragConstraints={{left: 0, top: 0, right: 0, bottom: 0}}
                    dragElastic={1}
                >
                    <img src="./mine.png" alt="" className="bounce"/>
                </motion.div>
            </div>
        </section>
        
    );
}

export default HomePage;