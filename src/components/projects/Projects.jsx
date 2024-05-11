import "./projects.scss";

function Projects() {
    return (
        <section id="projects" >
            <div className="top">
                <h2>PROJECTS</h2>
            </div>
            <div className="project">
                <a href="https://fetchmetadata.cyclic.app/" className="slide"><img src="./metadata.png" alt="" /></a>
                
                <div className="content slider-p">
                    <a href="https://fetchmetadata.cyclic.app/"><h3>Fetch Metadata</h3></a>
                    <p>A Fullstack website that allows you to extract Metadata information from files like videos, pictures, e-books, even music with just 3 steps. This is a ZURI team project, in which I was the Team Lead. </p>
                    <div className="links">
                        <a href="https://github.com/97Clinton/Fetch_Metadata-project">Code <i class="fa-brands fa-square-github fa-beat"></i></a>
                        <a href="https://fetchmetadata.cyclic.app/">Live Demo <i class="fa-regular fa-globe fa-beat"></i> </a>
                    </div>
                </div>
            </div>
            <div className="project right">
                <a href="https://97clinton.github.io/Tindog-App/" className="slider-p"><img src="./tindog.png" alt="" /></a>
                
                <div className="content slide">
                    <a href="https://97clinton.github.io/Tindog-App/"><h3>TINDOG </h3></a>
                    <p>This is website for dog lovers and dog feeds. FrontEnd only, HTML / CSS. </p>
                    <div className="links">
                        <a href="https://github.com/97Clinton/Tindog-App">Code <i class="fa-brands fa-square-github fa-beat"></i></a>
                        <a href="https://97clinton.github.io/Tindog-App/">Live Demo <i class="fa-regular fa-globe fa-beat"></i></a>
                    </div>
                </div>
            </div>
            <div className="project">
                <a href="https://clinestate.vercel.app/" className="slide"><img src="./clinestate.png" alt="" /></a>
                
                <div className="content slider-p">
                    <a href="https://clinestate.vercel.app/"><h3>CLINESTATE</h3></a>
                    <p>A real estate website made with REACT.JS framework, has different functionalities such as a Map direction, saved list, pages of different apartments of choice, filter and lots more. </p>
                    <div className="links">
                        <a href="https://github.com/97Clinton/Real-Estate-ReactApp">Code <i class="fa-brands fa-square-github fa-beat"></i></a>
                        <a href="https://clinestate.vercel.app/">Live Demo <i class="fa-regular fa-globe fa-beat"></i></a>
                    </div>
                </div>
            </div>
            <div className="project right">
                <a href="https://97clinton.github.io/Laundry-website/" className="slider-p"><img src="./clinlaundry.png" alt="" /></a>
                
                <div className="content slide">
                    <a href="https://97clinton.github.io/Laundry-website/"><h3>CLINLAUNDRY</h3></a>
                    <p>This is a simple Front-End website for Laundry business with contact details, about the business and even a slide show. </p>
                    <div className="links">
                        <a href="https://github.com/97Clinton/Laundry-website">Code <i class="fa-brands fa-square-github fa-beat"></i></a>
                        <a href="https://97clinton.github.io/Laundry-website/">Live Demo <i class="fa-regular fa-globe fa-beat"></i></a>
                    </div>
                </div>
            </div>
            <div className="project">
                <a href="https://github.com/97Clinton/To-Do-list-App/tree/master" className="slide"><img src="./todo.png" alt="" /></a>
                
                <div className="content slider-p">
                    <a href="https://github.com/97Clinton/To-Do-list-App/tree/master"><h3>To-Do LIST</h3></a>
                    <p>A to-do list website made with REACT.JS, Node.js. It can take in inputs, saves temporarily. </p>
                    <div className="links">
                        <a href="https://github.com/97Clinton/To-Do-list-App/tree/master">Code <i class="fa-brands fa-square-github fa-beat"></i></a>
                        <a href="/">Live Demo <i class="fa-regular fa-globe fa-beat"></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;