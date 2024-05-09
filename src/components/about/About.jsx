import "./about.scss";

function About() {
    return (
        <section id="about">
            <div className="stack">
                <p>Tech Stack</p>
                <div className="logos">
                    
                    <i class="fa-brands fa-html5 fa-bounce" style={{color: "orangered"}}></i>
                    <i class="fa-brands fa-css3 fa-bounce" style={{color: "#147efb"}}></i>
                    <i class="fa-brands fa-bootstrap fa-bounce" style={{color: "#147efb"}}></i>
                    <i class="fa-brands fa-js fa-bounce" style={{color: "rgba(240, 219, 79)"}}></i>
                    <i class="fa-brands fa-react fa-bounce" style={{color: "rgb(40, 165, 206)"}} ></i>
                    <i class="fa-brands fa-sass fa-bounce" style={{color: "rgb(255, 99, 125)"}} ></i>
                    <i class="fa-brands fa-node fa-bounce" style={{color: "#3c873a"}}></i>

                </div>
            </div>
            <div className="about-me">
                <div className="coding-img">
                    <img src="./coding.jpg" alt="" />
                </div>
                
                <div className="content">
                    <h3>ABOUT ME</h3>
                    <h4>Front-end Developer based in Nigeria.</h4>
                    <p>My name is Atayero Clinto, and I`m a graduate, also a Front-end developer for over 2years with proficiency at converting designs to a responsive web development that suits the purpose. </p>
                    <p>Most importantly, I`ve had the experience of being a Team Leader in creating a Fullstack web project.</p>
                </div>
            </div>
        </section>
    )
}

export default About;