import "./homePage.scss";

function HomePage() {
    return (
        <section id="homePage">
            <div className="container">
                <div className="left">
                    <h1>Front-End React Developer <img src="./wave.png" alt="" /></h1>
                    <p>Hi! I am Clinton. A skilled Front-End React developer with Team-work experience.</p>
                    <div className="link">
                        <a href=""><img src="./github.svg" alt="" /></a>
                        <a href=""><img src="./linkedin.svg" alt="" /></a>
                    </div>
                </div>
                <div className="right">
                    <img src="./mine.png" alt="" />
                </div>
            </div>
        </section>
        
    );
}

export default HomePage;