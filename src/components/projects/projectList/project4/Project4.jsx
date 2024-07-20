import "./project4.scss";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";

function Project4() {

    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"],
    });

    const projectImgValue = useTransform(
        scrollYProgress,
        [0, 1],
        ["-100%", "0%"],
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
        <motion.div className="project4 shadow p-3 mb-5 bg-body rounded"
            ref={containerRef}
        >
            <motion.a 
                style={{translateX: projectImgValue}}
                href="https://97clinton.github.io/Laundry-website/" className="slider-4"><img src="./clinlaundry.png" alt="" />

            </motion.a>

            <motion.div className="content slider-4"
                style={{translateX: projectTextValue}}
            >
                <a href="https://97clinton.github.io/Laundry-website/"><h3>CLINLAUNDRY</h3></a>
                <p>This is a simple Front-End website for Laundry business with contact details, about the business and even a slide show. </p>
                <div className="links">
                    <a href="https://github.com/97Clinton/Laundry-website">Code <i class="fa-brands fa-square-github fa-beat"></i></a>
                    <a href="https://97clinton.github.io/Laundry-website/">Live Demo <i class="fa-regular fa-globe fa-beat"></i></a>
                </div>
            </motion.div>
            
        </motion.div>
    )
};

export default Project4;