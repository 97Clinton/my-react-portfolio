import "./projects.scss";
import { useEffect, useRef } from "react";
import { motion, useAnimate, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
import Project2 from "./projectList/project2/Project2";
import Project3 from "./projectList/project3/Project3";
import Project4 from "./projectList/project4/Project4";
import Project5 from "./projectList/project5/Project5";

function Projects() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const projectImgValue = useTransform(
        scrollYProgress,
        [0, 1],
        ["-100%", "0%"]
    )
    const projectTextValue = useTransform(
        scrollYProgress,
        [0, 1],
        ["100%", "0%"]
    )

    
    const isInView = useInView(containerRef, {once: true});
    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);


    return (
        <section id="projects">
            <motion.div className="top"
                animate={mainControls}
                initial="hidden"
                variants={{
                    hidden: { opacity: 0, y: 125},
                    visible: {
                        opacity: 1,
                        y: 0
                    },
                }}
                transition={{ delay: 0.3, duration: 1, ease: "easeInOut"}}
            >
                <h2>PROJECTS</h2>
            </motion.div>
            <motion.div className="projectsContainer">
                <motion.div className="project1"
                    ref={containerRef}
                >
                    <motion.a 
                        style={{translateX: projectImgValue}}
                        href="https://fetchmetadata.cyclic.app/" className="slider-1"
                    ><img src="./metadata.png" alt="" /></motion.a>

                    <motion.div className="content slider-1"
                        style={{translateX: projectTextValue}}
                    >
                        <a href="https://fetchmetadata.cyclic.app/"><h3>Fetch Metadata</h3></a>
                        <p>A Fullstack website that allows you to extract Metadata information from files like videos, pictures, e-books, even music with just 3 steps. This is a ZURI team project, in which I was the Team Lead. </p>
                        <div className="links">
                            <a href="https://github.com/97Clinton/Fetch_Metadata-project">Code <i class="fa-brands fa-square-github fa-beat"></i></a>
                            <a href="https://fetchmetadata.cyclic.app/">Live Demo <i class="fa-regular fa-globe fa-beat"></i> </a>
                        </div>
                    </motion.div>
                </motion.div>

                <Project2 />
                
                <Project3 />
                <Project4 />
                <Project5 />
            </motion.div>
            
        </section>
    )
}

export default Projects;