import "./project4.scss";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Project4() {

    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1.5]);


    return (
        <motion.div className="project4 shadow p-3 mb-5 bg-body rounded"
            ref={containerRef}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
        >
            <a href="https://97clinton.github.io/Laundry-website/" className="slider-4"><img src="./clinlaundry.png" alt="" /></a>

            <div className="content slider-4">
                <a href="https://97clinton.github.io/Laundry-website/"><h3>CLINLAUNDRY</h3></a>
                <p>This is a simple Front-End website for Laundry business with contact details, about the business and even a slide show. </p>
                <div className="stack">
                    <ul>
                        <li class="shadow-sm p-1 mb-1 rounded">JavaScript</li> <li class="shadow-sm p-1 mb-1 rounded">HTML</li> <li class="shadow-sm p-1 mb-1 rounded">Bootstrap</li>
                         <li class="shadow-sm p-1 mb-1 rounded">CSS</li>
                    </ul>
                </div>
                <div className="links">
                    <a href="https://github.com/97Clinton/Laundry-website">Code <i class="fa-brands fa-square-github fa-beat"></i></a>
                    <a href="https://97clinton.github.io/Laundry-website/">Live Demo <i class="fa-regular fa-globe fa-beat"></i></a>
                </div>
            </div>
            
        </motion.div>
    )
};

export default Project4;