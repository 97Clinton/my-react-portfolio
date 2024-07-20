import "./projects.scss";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
import Project3 from "./projectList/project3/Project3";
import Project4 from "./projectList/project4/Project4";

const moreVariant = {
    visible: {
        y: [0, -20, 0, -20],
        transition: {
            y: {
                duration: 0.65,
                yoyo: Infinity,
                ease: "easeOut"
            }
        }
    }
}

function Projects() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    // const projectImgValue = useTransform(
    //     scrollYProgress,
    //     [0, 1],
    //     ["-100%", "0%"]
    // )
    // const projectTextValue = useTransform(
    //     scrollYProgress,
    //     [0, 1],
    //     // ["100%", "0%"]
    //     ["100%", "0%"]
    // )

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1.5]);

    
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
                <motion.div className="project1 shadow p-3 mb-5 bg-body rounded"
                    ref={containerRef}
                    style={{
                        scale: scaleProgress,
                        opacity: opacityProgress,
                    }}
                >
                    <a href="https://fetch-metadata-app.onrender.com/" className="slider-1"><img src="./metadata.png" alt="" /></a>

                    <div className="content slider-1">
                        <a href="https://fetchmetadata.cyclic.app/"><h3>Fetch Metadata</h3></a>
                        <p>A Fullstack website that allows users to extract Metadata information ( i.e creation date, geo-location / GPS cordinates, size, Camera settings, software etc. ) from files like videos, pictures, e-books, even music with just 3 steps. This is a ZURI team project, in which I was the Team Lead. </p>
                        <div className="stack">
                            <ul>
                                <li class="shadow-sm p-1 mb-1 rounded">JavaScript</li> <li class="shadow-sm p-1 mb-1 rounded">HTML, CSS</li> <li class="shadow-sm p-1 mb-1 rounded">Node.Js</li>
                                <li class="shadow-sm p-1 mb-1 rounded">MongoDB</li> <li class="shadow-sm p-1 mb-1 rounded">Express.Js</li> <li class="shadow-sm p-1 mb-1 rounded">Cloudinary</li>
                            </ul>
                        </div>
                        <div className="links">
                            <a href="https://github.com/97Clinton/Fetch_Metadata-project">Code <i class="fa-brands fa-square-github fa-beat"></i></a>
                            <a href="https://fetchmetadata.cyclic.app/">Live Demo <i class="fa-regular fa-globe fa-beat"></i> </a>
                        </div>
                    </div>
                </motion.div>
                
                <Project3 />
                <Project4 />

                <motion.div className="more"
                    variants={moreVariant}
                    // initial="hidden"
                    animate="visible"
                >
                    <motion.a 
                        // variants={moreVariant}

                        // animate="visible"
                        href="/projects"><h4>Click To See More</h4></motion.a>
                </motion.div>
            </motion.div>
            
        </section>
    )
}

export default Projects;