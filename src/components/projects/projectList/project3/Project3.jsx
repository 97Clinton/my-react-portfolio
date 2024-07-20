import "./project3.scss";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";

function Project3() {

    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1.5]);

    return (
        <motion.div className="project3 shadow-sm p-3 mb-5 bg-body rounded"
            ref={containerRef}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
        >
            <a href="https://clinestate.vercel.app/" className="slider-3"><img src="./clinestate.png" alt="" /></a>

            <div className="content slider-3">
                <a href="https://clinestate.vercel.app/"><h3>CLINESTATE</h3></a>
                <p>A real estate website made with REACT.JS framework, has different functionalities such as a Map direction, saved list, pages of different apartments of choice, filter and lots more. </p>

                <div className="stack">
                    <ul>
                        <li class="shadow-sm p-1 mb-1 rounded">JavaScript</li> <li class="shadow-sm p-1 mb-1 rounded">React.JS</li> <li class="shadow-sm p-1 mb-1 rounded">SASS</li>
                        <li class="shadow-sm p-1 mb-1 rounded">React-leaflet</li> <li class="shadow-sm p-1 mb-1 rounded">Express.Js</li> 
                    </ul>
                </div>
                <div className="links">
                    <a href="https://github.com/97Clinton/Real-Estate-ReactApp">Code <i class="fa-brands fa-square-github fa-beat"></i></a>
                    <a href="https://clinestate.vercel.app/">Live Demo <i class="fa-regular fa-globe fa-beat"></i></a>
                </div>
            </div>
            
        </motion.div>
    )
};

export default Project3;