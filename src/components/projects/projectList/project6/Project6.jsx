import "./project6.scss";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Project6() {

    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1.5]);


    return (
        <motion.div className="project6 shadow p-3 mb-5 bg-body rounded"
            ref={containerRef}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
        >
            <a href="https://journal-app-hlbx.onrender.com/" className="slider-4"><img src="./Clin-Journal.png" alt="" /></a>

            <div className="content slider-4">
                <a href="https://97clinton.github.io/Laundry-website/"><h3>CLIN-JOURNAL</h3></a>
                <p>A Journal website to record interesting activities with MongoDB database which provides access to the users to be able to read the composed journal even after a longtime.</p>
                <div className="stack">
                    <ul>
                        <li class="shadow-sm p-1 mb-1 rounded">JavaScript</li> <li class="shadow-sm p-1 mb-1 rounded">HTML</li> <li class="shadow-sm p-1 mb-1 rounded">EJS</li>
                         <li class="shadow-sm p-1 mb-1 rounded">CSS</li> <li class="shadow-sm p-1 mb-1 rounded">MongoDB</li> <li class="shadow-sm p-1 mb-1 rounded">Node.JS</li>
                         <li class="shadow-sm p-1 mb-1 rounded">Express.JS</li>
                    </ul>
                </div>
                <div className="links">
                    <a href="https://github.com/97Clinton/Journal-App">Code <i class="fa-brands fa-square-github fa-beat"></i></a>
                    <a href="https://journal-app-hlbx.onrender.com/">Live Demo <i class="fa-regular fa-globe fa-beat"></i></a>
                </div>
            </div>
            
        </motion.div>
    )
};

export default Project6;